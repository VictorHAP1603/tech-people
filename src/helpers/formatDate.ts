import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')

export const formatDate = (date: string) => {
    const dateTime = moment(date).format('DD MMM YYYY')
    return dateTime
}

export const formatDateSchedule = (date: string) => {
    const day = moment(date).format('DD')
    const month = moment(date).format('MMM')

    return { day, month }
}