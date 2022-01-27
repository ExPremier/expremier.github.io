import "core-js/modules/es6.array.fill";
import React from 'react';
import PropTypes from 'prop-types';
import { className } from 'utils';
import styles from './navToggle.module.scss';

var NavToggle = function NavToggle(_ref) {
  var isNavModalOpen = _ref.isNavModalOpen,
      toggleNavModal = _ref.toggleNavModal;
  return React.createElement("button", {
    className: isNavModalOpen ? styles.navToggleClose : styles.navToggle,
    onClick: function onClick() {
      return toggleNavModal(!isNavModalOpen);
    }
  }, React.createElement("span", {
    className: styles.navToggleIcon
  }, new Array(3).fill(null).map(function (key, i) {
    return React.createElement("span", {
      key: i,
      className: styles.iconDot
    });
  })), React.createElement("span", {
    className: styles.navToggleTextWrap
  }, React.createElement("span", className(styles.navToggleText, !isNavModalOpen && styles.active), "Menu"), React.createElement("span", className(styles.navToggleText, isNavModalOpen && styles.active), "Close")));
};

NavToggle.propTypes = {
  isNavModalOpen: PropTypes.bool.isRequired,
  toggleNavModal: PropTypes.func.isRequired
};
export default NavToggle;