import React from "react";

import Profile from "./index";

import userImage from "../../assets/user1.jpg";

export default {
    title: "Profile",
    component: Profile,
};
/* eslint-disable-next-line */
const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: userImage,
    name: "Aman",
};
