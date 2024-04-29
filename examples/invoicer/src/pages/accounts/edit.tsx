import { useNavigation } from "@refinedev/core";
import { DeleteButton, useForm } from "@refinedev/antd";
import { Card, Divider, Flex, Form, Typography } from "antd";
import {
  BankOutlined,
  UserOutlined,
  ShopOutlined,
  ExportOutlined,
  MailOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { PageHeader } from "../../components/page-header";
import { FormItemEditableInputText } from "../../components/form/form-item-editable-input-text";
import { FormItemEditableText } from "../../components/form/form-item-editable-text";
import { UploadAvatar } from "../../components/upload-avatar";
import { FormItemEditableSelect } from "../../components/form/form-item-editable-select";
import { countryOptions } from "../../utils/countries";

export const AccountsPageEdit = () => {
  const { listUrl } = useNavigation();

  const { formProps, queryResult } = useForm();
  const account = queryResult?.data?.data;

  return (
    <>
      <PageHeader
        backButtonText="Accounts"
        backButtonHref={listUrl("accounts")}
      />
      <Form {...formProps} layout="vertical">
        <Row>
          <Col span={24}>
            <Flex gap={16}>
              <UploadAvatar
                name={account?.ownerName}
                src={account?.companyLogo}
              />
              <FormItemEditableText
                formItemProps={{
                  name: "companyName",
                  rules: [{ required: true }],
                }}
              />
            </Flex>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "32px",
          }}
        >
          <Col span={9}>
            <Card
              styles={{ body: { padding: 0 } }}
              title={
                <Flex gap={12} align="center">
                  <BankOutlined />
                  <Typography.Text>Account info</Typography.Text>
                </Flex>
              }
            >
              <FormItemEditableInputText
                icon={<UserOutlined />}
                placeholder="Add owner name"
                formItemProps={{
                  name: "ownerName",
                  label: "Owner name",
                  rules: [{ required: true }],
                }}
              />
              <Divider style={{ margin: 0 }} />
              <FormItemEditableInputText
                icon={<MailOutlined />}
                placeholder="Add email"
                formItemProps={{
                  name: "ownerEmail",
                  label: "Owner email",
                  rules: [{ required: true }],
                }}
              />
              <Divider style={{ margin: 0 }} />
              <FormItemEditableSelect
                icon={<GlobalOutlined />}
                selectProps={{
                  placeholder: "Select country",
                  showSearch: true,
                  options: countryOptions,
                }}
                formItemProps={{
                  name: "country",
                  label: "Country",
                  rules: [{ required: true }],
                }}
              />
              <Divider style={{ margin: 0 }} />
              <FormItemEditableInputText
                icon={<EnvironmentOutlined />}
                placeholder="Add address"
                formItemProps={{
                  name: "address",
                  label: "Address",
                  rules: [{ required: true }],
                }}
              />
              <Divider style={{ margin: 0 }} />
              <FormItemEditableInputText
                icon={<PhoneOutlined />}
                placeholder="Add phone number"
                formItemProps={{
                  name: "phone",
                  label: "Phone",
                  rules: [{ required: true }],
                }}
              />
            </Card>
            <DeleteButton
              type="text"
              style={{
                marginTop: "16px",
              }}
              onSuccess={() => {
                listUrl("clients");
              }}
            >
              Delete account
            </DeleteButton>
          </Col>
        </Row>
      </Form>
    </>
  );
};
