import Frame from '../../components/Frame';
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
  Tag
} from 'rsuite';

import Modal from './Modal';

const tooltip = (
  <Tooltip>
    This is a help <i>tooltip</i> .
  </Tooltip>
);
export default () => (
  <Frame activeKey="1">
    <SelectPicker data={[]} />
    <CheckPicker data={[]} />
    <CheckTreePicker data={[]} />
    <TreePicker data={[]} />
    <Cascader data={[]} />
    <MultiCascader data={[]} />
    <DatePicker />
    <DateRangePicker />
    <InputPicker data={[]} />

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
    <Loader />
    <Modal />

    <Progress.Line />
    <div
      style={{
        width: 120,
        display: 'inline-block',
        marginRight: 10
      }}
    >
      <Progress.Circle />
    </div>

    <Dropdown title="Default">
      <Dropdown.Item>New File</Dropdown.Item>
      <Dropdown.Item>New File with Current Profile</Dropdown.Item>
      <Dropdown.Item>Download As...</Dropdown.Item>
      <Dropdown.Item>Export PDF</Dropdown.Item>
      <Dropdown.Item>Export HTML</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>About</Dropdown.Item>
    </Dropdown>

    <Steps current={1}>
      <Steps.Item />
      <Steps.Item />
      <Steps.Item />
      <Steps.Item />
    </Steps>

    <Pagination pages={10} activePage={1} />

    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Components</Breadcrumb.Item>
      <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>

    <Checkbox> Default</Checkbox>
    <Radio> Radio</Radio>
    <Input style={{ width: 300 }} placeholder="Default Input" />
    <InputNumber />
    <AutoComplete data={[]} />
    <Toggle />
    <Slider style={{ width: 100 }} />
    <Uploader
      onChange={value => {
        console.log(value, '0000');
      }}
      action="//jsonplaceholder.typicode.com/posts/"
    />

    <Panel header={<h3>Panel title</h3>}>Test</Panel>

    <Timeline>
      <Timeline.Item>16:27:41 您的订单开始处理</Timeline.Item>
      <Timeline.Item>16:28:43 您的订单待配货</Timeline.Item>
      <Timeline.Item>16:28:45 您的包裹已出库</Timeline.Item>
      <Timeline.Item>02:34:41 发往上海虹口区公司</Timeline.Item>
      <Timeline.Item>15:05:29 正在为您派件</Timeline.Item>
    </Timeline>
    <Tag>Text</Tag>
  </Frame>
);
