// @flow

import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  Container,
  Sidebar,
  Sidenav,
  Icon,
  Header,
  Content,
  Dropdown,
  Nav,
  DOMHelper
} from 'rsuite';

import NavToggle from './NavToggle';
import HeaderAvatar from '../HeaderAvatar';

const { getHeight, on } = DOMHelper;
const navs = [
  {
    key: '1',
    icon: <Icon icon="dashboard" />,
    text: 'Dashboard',
    link: '/'
  },
  {
    key: '2',
    icon: <Icon icon="group" />,
    text: 'Members',
    link: '/list/members'
  },
  {
    key: '3',
    text: 'Errors',
    icon: <Icon icon="exclamation-triangle" />,
    children: [
      {
        key: '3-1',
        text: '404',
        link: '/error/404'
      },
      {
        key: '3-2',
        text: '500',
        link: '/error/500'
      }
    ]
  }
];

class Frame extends React.Component {
  resizeListenner = null;
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      windowHeight: 0,
      expand: true
    };
  }
  componentDidMount() {
    this.resizeListenner = on(window, 'resize', this.updateHeight);
    this.setState({
      windowHeight: getHeight(window)
    });
  }

  updateHeight = () => {
    this.setState({
      windowHeight: getHeight(window)
    });
  };
  handleToggle = () => {
    this.setState({
      expand: !this.state.expand
    });
  };

  componentWillUnmount() {
    if (this.resizeListenner) {
      this.resizeListenner.off();
    }
  }

  renderNavs() {
    return navs.map((item, i) => {
      if (item.children) {
        return (
          <Dropdown
            key={item.key}
            placement="rightTop"
            trigger="hover"
            title="Errors"
            icon={item.icon}
            eventKey={item.key}
          >
            {item.children.map((child, index) => {
              return (
                <Dropdown.Item href={child.link} key={child.key} eventKey={child.key}>
                  {child.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        );
      }

      return (
        <Nav.Item href={item.link} key={item.key} eventKey={item.key} icon={item.icon}>
          {item.text}
        </Nav.Item>
      );
    });
  }

  render() {
    const { children, activeKey } = this.props;
    const { expand, windowHeight } = this.state;

    const containerClasses = classNames('page-container', {
      'container-full': !expand
    });

    let navBodyStyle = null;
    if (expand) {
      navBodyStyle = {
        height: windowHeight - 112,
        overflow: 'auto'
      };
    }

    return (
      <Container className="frame">
        <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div className="header-hrand">
              <a href="/">
                <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                <span style={{ marginLeft: 12 }}> RSUITE ANALYTICS</span>
              </a>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={['1', '2', '3']}
            activeKey={activeKey}
            appearance="subtle"
          >
            <Sidenav.Body style={navBodyStyle}>
              <Nav>
                {this.renderNavs()}
                <Nav.Item
                  href="https://github.com/rsuite/rsuite-management-system"
                  icon={<Icon icon="github" />}
                  target="_blank"
                >
                  Github
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={this.handleToggle} />
        </Sidebar>

        <Container className={containerClasses}>
          <HeaderAvatar />
          <Content>{children}</Content>
        </Container>
      </Container>
    );
  }
}

export default Frame;
