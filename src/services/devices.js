import { http } from './config'

export default {
  read:() => {
    return http.get('device')
  },
  update:(device)=>{
    return http.put('device',device);
  },
  
  save:(device)=>{
    return http.post('device',device);
  },
  
  delete:(device)=>{
    return http.delete('device', { data: device })
  }
  
}