// video add
import { Base_URL } from "./baseurl"
import { commonApi } from "./commonStructure"

export const addVideoApi = async (bodyData) => {
    return await commonApi('POST',`${Base_URL}/videos`,bodyData)
}


//get all video

export const getVideoApi = async () => {
    return await commonApi('GET',`${Base_URL}/videos`,{})
}


// delete

export const deleteVideoApi = async(id) => {
    return await commonApi('DELETE',`${Base_URL}/videos/${id}`)
}


//category add

export const addCatApi = async (bodyData) => {
    return await commonApi('POST',`${Base_URL}/categories`,bodyData)
}


// getCAtegories

export const getCatApi = async () => {
    return await commonApi('GET',`${Base_URL}/categories`,{})
}

//deleteCategory
export const deleteCatApi = async(id) => {
    return await commonApi('DELETE',`${Base_URL}/categories/${id}`)
}

//getSingleVideos
export const getVideo = async (id) => {
    return await commonApi('GET',`${Base_URL}/videos/${id}`,{})
}

//updateCategory
export const updateCat = async (id,bodyData) => {
    return await commonApi('PUT',`${Base_URL}/categories/${id}`,bodyData)
}

//history
export const addHistoruApi = async (bodyData) => {
    return await commonApi('POST',`${Base_URL}/histories`,bodyData)
}

//get History 
export const getHistoryApi = async () => {
    return await commonApi('GET',`${Base_URL}/histories`,{})
}

//delete history
export const deleteHistoryApi = async(id) => {
    return await commonApi('DELETE',`${Base_URL}/histories/${id}`)
}

