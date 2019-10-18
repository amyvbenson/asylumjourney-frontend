/**
 * Constants.
 */

/**
 * Set apiUrl based on window location so always uses correct api.
 */
const getApiUrl = () => {
  const stagingUrl = 'https://kirkleeswelcomes.herokuapp.com/'; // only prod api exists for Kirklees
  const productionUrl = 'https://kirkleeswelcomes.herokuapp.com/';
  return window.location && window.location.hostname === 'kirkleeswelcomes.org.uk' ? productionUrl : stagingUrl; // eslint-disable-line
}

export const apiUrl = getApiUrl();
export const stagingUrl = 'kirklees-welcomes-staging.web.app';