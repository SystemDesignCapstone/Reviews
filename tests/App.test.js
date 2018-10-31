import React from 'react';
import Reviews from './client/src/components/reviews.jsx';
import App from './client/src/index.jsx';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter()});
describe('<Reviews />', () => {
  it('renders 1 <Reviews /> component', () => {
    const review = shallow(<Reviews />);
    expect(review.exists()).toBe(true);
  });
});