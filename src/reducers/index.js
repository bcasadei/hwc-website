import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PackageReducer from './reducer_packages';
import ActivePackage from './reducer_active_package';
import ActiveDate from './reducer_active_date';
import NumberGuests from './reducer_number_guests';
import CeremonyLocations from './reducer_ceremony_locs';
import ReceptionLocations from './reducer_reception_locs';

const rootReducer = combineReducers({
  form: formReducer,
  packages: PackageReducer,
  activePackage: ActivePackage,
  activeDate: ActiveDate,
  numberGuests: NumberGuests,
  ceremonyLocations: CeremonyLocations,
  receptionLocations: ReceptionLocations
});

export default rootReducer;
