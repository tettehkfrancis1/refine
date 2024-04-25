import { useShow } from "@refinedev/core";
import {
  Link as ReactRouterLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Hourglass } from "react95";
import styled from "styled-components";
import { ImagePixelated } from "../../components/image-pixelated";
import { Browser } from "../../components/browser";
import { RVCWebsiteLayout } from "../../components/rvc-website/layout";
import { getTMDBImgLink } from "../../utils/get-tmdb-img-link";
import { getHourFromMinutes } from "../../utils/get-hour-from-minutes";
import { IVideoTitle } from "../../interfaces";
import { MediaPlayer } from "../../components/media-player";

export const RVCWebsitePageTitleDetails = () => {
  const { titleId } = useParams();
  const navigate = useNavigate();

  const { queryResult } = useShow<IVideoTitle>({
    resource: "titles",
    id: titleId,
  });
  const title = queryResult.data?.data;
  const isLoading = queryResult.isLoading;
  const address = title
    ? `http://www.refinevideoclub.geocities.com/catalog/${title?.title}.html`
    : "";

  return (
    <Browser
      title="RVC Website"
      onClose={() => navigate("/")}
      address={address}
    >
      <RVCWebsiteLayout>
        <Container>
          {isLoading && !title && (
            <Hourglass
              size={64}
              style={{
                marginTop: "48px",
              }}
            />
          )}
          {title && (
            <>
              <Title>{title.title}</Title>
              <TitleDetailsContainer>
                <TitleImage
                  src={getTMDBImgLink({
                    path: title.poster_path,
                  })}
                />
                <div>
                  <TitleDetailRow>
                    <TitleDetailLabel>Category:</TitleDetailLabel>
                    <TitleDetailValue>
                      {title.genres.join(", ")}
                    </TitleDetailValue>
                  </TitleDetailRow>
                  <TitleDetailRow>
                    <TitleDetailLabel>Year:</TitleDetailLabel>
                    <TitleDetailValue>{title.year}</TitleDetailValue>
                  </TitleDetailRow>
                  <TitleDetailRow>
                    <TitleDetailLabel>Duration:</TitleDetailLabel>
                    <TitleDetailValue>
                      {
                        getHourFromMinutes({ minutes: title.duration_minutes })
                          .text
                      }
                    </TitleDetailValue>
                  </TitleDetailRow>
                  <TitleDetailRow>
                    <TitleDetailLabel>Director:</TitleDetailLabel>
                    <TitleDetailValue>{title.director}</TitleDetailValue>
                  </TitleDetailRow>
                  <TitleDetailRow>
                    <TitleDetailLabel>Cast:</TitleDetailLabel>
                    <TitleDetailValue>{title.cast.join(", ")}</TitleDetailValue>
                  </TitleDetailRow>
                  <TitleDetailRow>
                    <TitleDetailLabel>Overview:</TitleDetailLabel>
                    <TitleDetailValue
                      style={{
                        maxWidth: "320px",
                        lineHeight: "20px",
                      }}
                    >
                      {title.overview}
                    </TitleDetailValue>
                  </TitleDetailRow>
                </div>
              </TitleDetailsContainer>
              <MediaPlayer youtubeKey={title.trailer_key} />
            </>
          )}
          <BackButton to="/rvc-website/catalog">
            <img
              style={{
                width: "64px",
                height: "64px",
              }}
              src="https://refine.ams3.cdn.digitaloceanspaces.com/win95/arrow1.gif"
              alt="Back"
            />
            Back to catalog
          </BackButton>
        </Container>
      </RVCWebsiteLayout>
    </Browser>
  );
};

const Container = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #ff00ff;
  font-size: 64px;
  line-height: 40px;
  margin-top: 48px;
  margin-bottom: 24px;
  font-family: "pixelated-times-new-roman", "ms_sans_serif";
`;

const TitleDetailsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 80px;
`;

const TitleImage = styled(ImagePixelated)`
  display: block;
  width: 240px;
  height: 360px;
  aspect-ratio: 240 / 360;
`;

const TitleDetailRow = styled.div`
  display: flex;
  padding: 8px 0;
`;

const TitleDetailLabel = styled.div`
  width: 92px;
  font-weight: bold;
  color: #b5b5b5;
`;

const TitleDetailValue = styled.div`
  color: white;
`;

const BackButton = styled(ReactRouterLink)`
  color: #00ccff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 80px;
`;
