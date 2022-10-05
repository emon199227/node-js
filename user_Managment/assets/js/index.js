
//add user message
$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

//update user
$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}
    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
     })
    
    console.log(unindexed_array);

    var request = {
        "url":`http://localhost:8080/api/users/${data.id}?`,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})

//deleted user
if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url":`http://localhost:8080/api/users/${id}`,
            "method":"DELETE"  
        }
        if(confirm("Do You Want This Deleted this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}