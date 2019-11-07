import Frame from "../../components/Frame";
import Link from "next/link";
import {
  SelectPicker,
  CheckPicker,
  CheckTreePicker,
  TreePicker,
  DatePicker,
  DateRangePicker,
  Cascader,
  MultiCascader,
  ButtonToolbar,
  Button,
  Whisper,
  Tooltip,
  Loader,
  Progress,
  Dropdown,
  Nav,
  Navbar,
  Steps,
  Pagination,
  Breadcrumb,
  Checkbox,
  Radio,
  Input,
  InputNumber,
  AutoComplete,
  Toggle,
  InputPicker,
  Slider,
  Uploader,
  Panel,
  Timeline,
  Divider,
  Tag
} from "rsuite";

import Modal from "./Modal";

const MyButton = React.forwardRef(({ onClick, href }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    Click Me
  </a>
));

const tooltip = (
  <Tooltip>
    This is a help <i>tooltip</i> .
  </Tooltip>
);
export default () => (
  <Frame activeKey="1">
    <Panel style={{ background: "#fff" }}>
      <ButtonToolbar>
        <SelectPicker data={[]} />
        <CheckPicker data={[]} />
        <CheckTreePicker data={[]} />
        <TreePicker data={[]} />
      </ButtonToolbar>
      <Divider />
      <ButtonToolbar>
        <Cascader data={[]} />
        <MultiCascader data={[]} />
        <DatePicker />
        <DateRangePicker />
        <InputPicker data={[]} />
      </ButtonToolbar>
      <Divider />
      <ButtonToolbar>
        <Whisper placement="top" trigger="click" speaker={tooltip}>
          <Button>Click</Button>
        </Whisper>
        <Whisper placement="top" trigger="focus" speaker={tooltip}>
          <Button>Focus</Button>
        </Whisper>
        <Whisper placement="top" trigger="hover" speaker={tooltip}>
          <Button>Hover</Button>
        </Whisper>

        <Whisper placement="top" trigger="active" speaker={tooltip}>
          <Button>Active</Button>
        </Whisper>
      </ButtonToolbar>
      <Divider />
      <Loader />
      <Divider />
      <Modal />
      <Divider />
      <Progress.Line percent={50} />
      <div
        style={{
          width: 120,
          display: "inline-block",
          marginRight: 10
        }}
      >
        <Progress.Circle percent={50} />
      </div>
      <Divider />
      <Dropdown title="Default">
        <Dropdown.Item>New File</Dropdown.Item>
        <Dropdown.Item>New File with Current Profile</Dropdown.Item>
        <Dropdown.Item>Download As...</Dropdown.Item>
        <Dropdown.Item>Export PDF</Dropdown.Item>
        <Dropdown.Item>Export HTML</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item
          renderItem={item => {
            return <Link href="/">{item}</Link>;
          }}
        >
          About
        </Dropdown.Item>
      </Dropdown>
      <Navbar>
        <Nav>
          <Nav.Item
            renderItem={item => {
              return <Link href="/error/404">{item}</Link>;
            }}
          >
            404
          </Nav.Item>
          <Nav.Item
            renderItem={item => {
              return <Link href="/error/500">{item}</Link>;
            }}
          >
            500
          </Nav.Item>
        </Nav>
      </Navbar>
      <Divider />
      <Steps current={1}>
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
        <Steps.Item />
      </Steps>
      <Divider />
      <Pagination pages={10} activePage={1} />
      <Divider />

      <Breadcrumb>
        <Breadcrumb.Item
          renderItem={item => {
            return <Link href="/">{item}</Link>;
          }}
        >
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item
          renderItem={item => {
            return <Link href="/components">{item}</Link>;
          }}
        >
          Components
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <Checkbox> Default</Checkbox>
      <Radio> Radio</Radio>
      <Input style={{ width: 300 }} placeholder="Default Input" />
      <InputNumber />
      <AutoComplete data={[]} />
      <Toggle />
      <Divider />
      <Slider style={{ width: 100 }} />
      <Divider />
      <Uploader
        onChange={value => {
          console.log(value, "0000");
        }}
        action="//jsonplaceholder.typicode.com/posts/"
      />
      <Divider />
      <Panel header={<h3>Panel title</h3>}>Test</Panel>
      <Divider />
      <Timeline>
        <Timeline.Item>16:27:41 您的订单开始处理</Timeline.Item>
        <Timeline.Item>16:28:43 您的订单待配货</Timeline.Item>
        <Timeline.Item>16:28:45 您的包裹已出库</Timeline.Item>
        <Timeline.Item>02:34:41 发往上海虹口区公司</Timeline.Item>
        <Timeline.Item>15:05:29 正在为您派件</Timeline.Item>
      </Timeline>
      <Divider />
      <Tag>Text</Tag>
      <Tag closable>Closable</Tag>
      <Tag>
        <a target="_blank" href="http://www.hypers.com">
          Link
        </a>
      </Tag>
    </Panel>
  </Frame>
);
