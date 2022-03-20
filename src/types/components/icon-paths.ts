/* eslint-disable max-len */

const sunOutline =
  'M12 6.5C8.9 6.5 6.5 9 6.5 12S9 17.5 12 17.5s5.5-2.5 5.5-5.5-2.4-5.5-5.5-5.5zm0 9c-2 0-3.5-1.6-3.5-3.5S10 8.5 12 8.5s3.5 1.6 3.5 3.5-1.5 3.5-3.5 3.5zM11 3.8V2c0-.6.4-1 1-1s1 .4 1 1v1.8c0 .6-.4 1-1 1s-1-.4-1-1zm2 16.4V22c0 .6-.4 1-1 1s-1-.4-1-1v-1.8c0-.6.4-1 1-1s1 .4 1 1zM4.2 5.6c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L4.2 5.6zm15.6 12.8c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-1.3-1.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3zM3.8 13H2c-.6 0-1-.4-1-1s.4-1 1-1h1.8c.6 0 1 .4 1 1s-.4 1-1 1zM23 12c0 .6-.4 1-1 1h-1.8c-.6 0-1-.4-1-1s.4-1 1-1H22c.6 0 1 .4 1 1zM6.9 17.1c.4.4.4 1 0 1.4l-1.3 1.3c-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l1.3-1.3c.4-.4 1-.4 1.4 0zM17.1 6.9c-.4-.4-.4-1 0-1.4l1.3-1.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-1.3 1.3c-.2.2-.5.3-.7.3s-.5-.1-.7-.3z';

const moonOutline =
  'M12 22h-.9c-2.7-.2-5.1-1.5-6.8-3.6-1.7-2.1-2.5-4.7-2.3-7.3.5-4.8 4.3-8.7 9.1-9.1.4 0 .8.2 1 .5.2.3.2.8-.1 1.1-1 1.3-1.3 2.9-1.1 4.5s1.1 3 2.4 3.9c2.1 1.6 5 1.6 7.1 0 .3-.2.7-.3 1.1-.1.3.2.5.6.5 1-.2 2.7-1.5 5.1-3.6 6.8-1.8 1.5-4 2.3-6.4 2.3zM9.3 4.4c-2.9 1-5 3.7-5.3 6.8-.2 2.1.4 4.2 1.8 5.9s3.3 2.7 5.4 2.9c2.1.2 4.2-.4 5.9-1.8 1.1-.9 1.9-2.1 2.4-3.4-2.5.9-5.3.5-7.5-1.1-1.7-1.3-2.8-3.1-3.2-5.3-.1-1.4 0-2.7.5-4z';

const gitHubOutline =
  'M15.8 22.5c-.6 0-1-.4-1-1V18c0-.7-.2-1.2-.6-1.7-.3-.3-.4-.7-.2-1 .1-.4.5-.6.8-.7 2.6-.3 4.9-1.1 4.9-5.3 0-1-.4-2-1.1-2.7-.3-.3-.3-.7-.2-1 .2-.7.3-1.4.1-2-.4.1-1.2.4-2.3 1.1-.2.2-.5.2-.8.1-1.9-.5-3.9-.5-5.8 0-.1.1-.4.1-.6-.1-1.1-.7-1.9-1-2.3-1.1-.1.7-.1 1.4.1 2 .1.4.1.8-.2 1-.7.8-1.1 1.7-1.1 2.7 0 3.9 2 5 4.9 5.3.4 0 .7.3.8.7.1.4 0 .8-.2 1-.4.4-.6 1-.6 1.6v3.5c0 .6-.4 1-1 1s-1-.4-1-1V20c-2.7.4-3.9-1.1-4.7-2.1-.3-.4-.6-.8-.9-.9-.5-.1-.9-.7-.7-1.2.1-.5.7-.9 1.2-.7.9.2 1.5.9 2 1.6.7.9 1.3 1.7 3.1 1.3 0-.5 0-1.1.2-1.6-2.5-.6-5.2-2.2-5.2-7.1.1-1.3.6-2.6 1.4-3.6-.3-1.2-.2-2.4.3-3.6.1-.3.3-.5.6-.6.3-.1 1.6-.3 4 1.2 2-.5 4-.5 6 0 2.4-1.5 3.7-1.3 4-1.2.3.1.5.3.6.6.5 1.1.6 2.4.3 3.6.8 1 1.2 2.3 1.2 3.6 0 5.1-3.1 6.6-5.2 7.1.2.5.3 1.1.2 1.7v3.4c0 .6-.4 1-1 1z';

const linkedInOutline =
  'M21.5 22h-3.8c-.6 0-1-.4-1-1v-6.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9V21c0 .6-.4 1-1 1h-3.8c-.6 0-1-.4-1-1v-6.7a6.7 6.7 0 0 1 13.4 0V21c0 .6-.4 1-1 1zm-2.8-2h1.8v-5.7c0-2.6-2.1-4.7-4.7-4.7s-4.7 2.1-4.7 4.7V20h1.8v-5.7c0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9V20zM6.3 22H2.5c-.6 0-1-.4-1-1V9.6c0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1V21c0 .6-.4 1-1 1zm-2.8-2h1.8v-9.4H3.5V20zM4.4 7.8c-1.6 0-2.9-1.3-2.9-2.9S2.8 2 4.4 2s2.9 1.3 2.9 2.9S6 7.8 4.4 7.8zm0-3.8c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9z';

const twitterOutline =
  'M8.6 21.1c-2.4 0-4.8-.6-7.1-1.9-.4-.2-.6-.7-.5-1.1.1-.4.6-.8 1-.7 1.5.1 2.9-.2 4.2-.8C3 14.5 2.1 11.5 2 9.3c-.1-2.7.8-4.9.9-5 .2-.3.5-.5.8-.6.4 0 .7.1.9.4C6.1 6.3 8.5 7.6 11 7.8c0-1.4.6-2.8 1.7-3.8 1.9-1.7 4.8-1.6 6.7 0 .7-.3 1.4-.6 2-1.1.3-.2.8-.2 1.1 0 .3.2.5.7.4 1.1-.3 1.3-.9 2.5-1.8 3.4v.4c0 5-2.2 9.2-6.1 11.5-1.9 1.3-4.1 1.8-6.4 1.8zm-2.7-2.3c2.8.6 5.7.3 8.1-1.2 3.2-1.9 5.1-5.5 5.1-9.8 0-.2 0-.4-.1-.6-.1-.3 0-.7.3-.9l.4-.4c-.1 0-.2.1-.3.1-.4.1-.8 0-1-.3-1.1-1.3-3.1-1.4-4.3-.3-.7.8-1.1 1.6-1.1 2.5v.9c0 .5-.4 1-1 1-3 .1-5.7-1.1-7.8-3.1-.5 2.3-.6 6.6 4.5 8.9.3.1.6.5.6.8 0 .4-.1.7-.4.9-.9.7-1.9 1.2-3 1.5z';

const polywork =
  'M16 16h2c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v12c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4v-2zm0-12h2c1.1 0 2 .9 2 2v2h-4V4zm0 6h4v2c0 1.1-.9 2-2 2h-2v-4zM8 20H6c-1.1 0-2-.9-2-2v-2h4v4zm0-6H4v-4h4v4zm0-6H4V6c0-1.1.9-2 2-2h2v4zm4 12h-2v-4h4v2c0 1.1-.9 2-2 2zm2-6h-4v-4h4v4zm-4-6V4h4v4h-4z';

export const customIconPaths = {
  sunOutline,
  moonOutline,
  gitHubOutline,
  linkedInOutline,
  twitterOutline,
  polywork,
};
