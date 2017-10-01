import axios from 'axios';

export const FETCH_CONTENT = 'fetch_content';
export const FETCH_GALLERY = 'fetch_gallery';
export const SELECT_PACKAGE = 'select_package';
export const SELECT_CEREMONY = 'select_ceremony';
export const SELECT_RECEPTION = 'select_reception';

const ROOT_URL = "https://highlandweddingchapel.com/api/wp-json/wp/v2";

export function fetchContent(pageQuery) {
  const request = axios.get(`${ROOT_URL}${pageQuery}`);

  return {
    type: FETCH_CONTENT,
    payload: request
  }
}

export function fetchGallery() {
  const request = axios.get(`${ROOT_URL}/media?parent=13&type=attachment&per_page=100`);

  return {
    type: FETCH_GALLERY,
    payload: request
  }
}

export function selectPackage(activePackage) {
  return {
    type: SELECT_PACKAGE,
    payload: activePackage
  }
}

export function selectCeremony(activeCeremony) {
  return {
    type: SELECT_CEREMONY,
    payload: activeCeremony
  }
}

export function selectReception(activeReception) {
  return {
    type: SELECT_RECEPTION,
    payload: activeReception
  }
}
