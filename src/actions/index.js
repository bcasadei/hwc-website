export const SELECT_PACKAGE = 'select_package';
export const SELECT_DATE = 'select_date';
export const ENTER_GUESTS = 'enter_guests';

export function selectPackage(activePackage) {
  return {
    type: SELECT_PACKAGE,
    payload: activePackage
  }
}

export function selectDate(activeDate) {
  return {
    type: SELECT_DATE,
    payload: activeDate
  }
}

export function enterGuests(numberGuests) {
  return {
    type: ENTER_GUESTS,
    payload: numberGuests
  }
}
