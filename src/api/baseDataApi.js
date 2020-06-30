import axios from './axios'
import qs from 'qs'
import {baseUrl} from '@/config/config'
export const getTeacherList = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/bdc/api/app/teacher',
            method: 'get',
            params
        }).then(res => {
          resolve(res.data)
        })
    })
}

export const getGradeList = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/bdc/api/app/grade',
            method: 'get',
            params
        }).then(res => {
          resolve(res.data)
        })
    })
}

export const getClassList = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/bdc/api/app/class',
            method: 'get',
            params
        }).then(res => {
          resolve(res.data)
        })
    })
}

export const getStageList = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/bdc/api/app/stage',
            method: 'get',
            params
        }).then(res => {
          resolve(res.data)
        })
    })
}

export const getStudentList = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/bdc/api/app/student',
            method: 'get',
            params
        }).then(res => {
          resolve(res.data)
        })
    })
}

export const exportStudent = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(
            baseUrl + '​/bdc/api/app/student/export', 
            params
        ).then(res => {
            resolve(res.data) 
        })      
    })
}

export const getDept = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '​/bdc/api/app/dept',
            method: 'get',
            params
        }).then(res => {
          resolve(res.data)
        })    
    })
}

export const schoolDeptModelList = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/bdc/api/app/dept/schoolDeptModelList/' + id,
            method: 'get'
        }).then(res => {
          resolve(res.data)
        })    
    })
}

export const teacherListByDept = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/bdc/api/app/dept/teacherListByDept/' + id,
            method: 'get'
        }).then(res => {
          resolve(res.data)
        })    
    })
}

export const getSchool = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/bdc/api/app/school/' + id,
            method: 'get'
        }).then(res => {
          resolve(res.data)
        })    
    })
}
