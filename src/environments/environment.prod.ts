export const environment = {
    production: true,  // Set to true for production mode
    apiUrl: 'http://10.23.4.77/idsc_api',
    pageSize: 3,  // Add your development API endpoint or other configuration variables here
    api: {
      documents: {
        getBatches: "/api/Document/getBatches",
        getBatchDocuments: "/api/Document/getBatchDocuments",
        getDocumentDetails: "/api/Document/getDocumentDetails/{0}",
        updateDocument: "/api/Document/updateDocument",
        ApproveDocument: "/api/Document/ApproveDocument/{0}",
        filtrationDocument:"/api/Document/filtration"
      },
      classificationManagement: {
        getClassification:"/api/Management/getClassifications",
        addClassification: "/api/Management/addClassification",
        editClassification: "/api/Management/updateClassification",
        deleteClassification:"/api/Management/deleteClassification",
        filtrationClassification:"/api/Management/filtration"
      },
      account: {
        login:"/api/Account/Login",
        logout:"/api/Account/RevokeToken",
        onTimePassword:"/api/Account/IsFirstLogin?emailEdress={0}",
        changePassword:"/api/Account/ChangePassword",
        forgetPassword:"/api/Account/ResetPassword",
        refreshToken:"/api/Account/RefreshToken",
        CreateUser:"/api/UserManagement/CreateUser"
      },
      userManagement:{
        getAllUser:"/api/UserManagement/GetAllUser",
        search:"/api/UserManagement/Search",
        createUser:"/api/UserManagement/CreateUser",
        updateUser:"/api/UserManagement/UpdateUser"
      },
      lookup:{
        jobTitle:"/api/Lookup/jobTitle",
        department:"/api/Lookup/Department"
      }
    }
  };