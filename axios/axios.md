# upload file
```js
 api_uploadFile() {
      var input = document.createElement("input");
      input.type = "file";
      input.onchange = e => {
        var file = e.target.files[0];
        console.log("selectFile", file);
        var fileUrl = window.URL.createObjectURL(file);
        console.log("fileUrl", fileUrl);
        //save this files
        this.uploadFile = file;
        //upload the file

        this.loading = true;
        var formData = new FormData();
        formData.append("uploaded_file", file);
        axios
          .post(urlrepo.POST_ORDERV3_cutomer_excel_upload, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            if (response.status == 200) {
              this.showSuccessNoification("File uploaded sucessfully");
            }
          })
          .catch(error => {
            this.showWarningNotification(
              "Error uploading excel file please check the data"
            );
          })
          .then(() => {
            this.api_loadData({
              pagination: this.pagination,
              filter: undefined
            });
            this.loading = false;
          });
      };
      input.click();
    },
```
    
# Download File
    ```js
     api_downloadTemplateFile() {
      axios
        .get(urlrepo.GET_ORDERV3_cutomer_excel_template, {
          responseType: "arraybuffer"
        })
        .then(function(response) {
          var blob = new Blob([response.data]);
          var link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "orderUploadexcel.xlsx";
          link.click();
        });
    },
    ```
    
    
    
    
    
    
