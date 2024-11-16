import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  let handleDisplayDrawer;
  let handleHideDrawer;
  let wrapper;

  beforeEach(() => {
    handleDisplayDrawer = jest.fn();
    handleHideDrawer = jest.fn();
    wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
  });

  it('should call handleDisplayDrawer when menu button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when close button is clicked', () => {
    wrapper.setProps({ displayDrawer: true }); // Make sure the drawer is displayed
    wrapper.find('button').at(1).simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});

