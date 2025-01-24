
import moment from 'moment';

export const relativeDateTime = (date:Date , includeTime: boolean) => {
  const format = `DD MMM YYYY ${includeTime ? ', h:mmA':''}`  
  return  moment(date).format(format)

}