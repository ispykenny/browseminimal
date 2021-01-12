import moment from 'moment'

const cleanDate = ogDate => {
  let newDate = moment(ogDate).format('MMMM-Do-YYYY');
  return newDate;
}

export default cleanDate;