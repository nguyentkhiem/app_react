import React from "react";
import {Link} from 'react-router-dom';
import {FaReact} from 'react-icons/fa';
import {Translation} from 'react-i18next';

function Categories(props) {
  return (
    <>
      {props.categories.map(({icon, id, path, parent, children}) => (
        <li key={id} className={props.activePath === path ? "active" : "dropdown"}>
          <Link
            to={path}
            data-toggle="dropdown"
            aria-expanded="false"
            aria-haspopup="true"
            data-target={parent ? '#group1' : ''}
            className={children ? 'dropdown-toggle' : ''}>
            {icon}
            <span><Translation>{t => t(id)}</Translation></span>
          </Link>
          { parent && children && (
            <ul className="sub-menu">
              {children.map((item) => (
                  <li key={item.id} className={props.activePath === item.path ? "active" : ""}>
                    <Link
                        to={item.path}
                        data-toggle="collapse"
                        className="children-li"
                        aria-expanded="false">
                        {item.icon}
                        <span><Translation>{t => t(item.id)}</Translation></span>
                    </Link>
                  </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  )
}

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const activePath = this.props.activePath;
    return (
      <nav id="sidebar" className={this.props.active ? "active" : ""}>
        <div className="sidebar-header">
          <div>
            <FaReact className="logo-chat-bot"/>
            <span>REACT APP</span>
          </div>
        </div>

        <ul className="list-unstyled components">
          <Categories activePath={activePath} categories={this.props.categories}/>
        </ul>
      </nav>
    );
  }
}
