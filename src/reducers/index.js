import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PageContent from './reducer_content';
import GalleryImages from './reducer_gallery';
import PackageReducer from './reducer_packages';
import ActivePackage from './reducer_active_package';
import CeremonyLocations from './reducer_ceremony_locs';
import ReceptionLocations from './reducer_reception_locs';
import ActiveCeremony from './reducer_active_ceremony';
import ActiveReception from './reducer_active_reception';

const rootReducer = combineReducers({
  form: formReducer,
  pageContent: PageContent,
  galleryImages: GalleryImages,
  packages: PackageReducer,
  activePackage: ActivePackage,
  ceremonyLocations: CeremonyLocations,
  receptionLocations: ReceptionLocations,
  activeCeremony: ActiveCeremony,
  activeReception: ActiveReception
});

export default rootReducer;
