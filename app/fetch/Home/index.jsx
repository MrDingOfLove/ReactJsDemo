import { get } from '../common/get'
import * as Url from '../../config/url'

export function getMemoListData(city,page){
	const data = get(Url.MEMO + encodeURIComponent(city) +'/'+ page)
	return data
}