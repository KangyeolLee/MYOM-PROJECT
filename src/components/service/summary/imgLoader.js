import { storage } from '../../../config/fbConfig';

export const imgLoader = (props) => {
  let imageArrays = [];
  storage.ref('images/theme').child(`${props.title}.jpg`).getDownloadURL().then((url) => {
    imageArrays.push(url);
  });
  return imageArrays;
}