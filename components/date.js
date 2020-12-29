import { parseISO, format } from 'date-fns'//日付のプラグイン

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "yyyy年M月d日")}</time>
}