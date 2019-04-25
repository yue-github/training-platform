<template>
  <div id="test">
    <div id="html-content-holder" style="background-color: #F0F0F1; color: #00cc65; width: 500px;
        padding-left: 25px; padding-top: 10px;padding-right: 25px;padding-bottom: 15px;margin-bottom:15px;">
        <span>{{aa}}</span>
        
    </div>
    <!-- <input id="btn-Preview-Image" type="button" value="预 览"/> -->
    <a id="btn-Convert-Html2Image" href="#">下载</a>
    <!-- <br/> -->
    <!-- <h3>预 览 :</h3> -->
    <!-- <div id="previewImage">
    </div> -->
  </div>
</template>


<script>
export default {
  data(){
    return{
      aa: 'aaaaaaaa'
    }
  },
  // methods:{
  //   tt(){
  //     let aa=document.getElementById('cc');
  //     var getCanvas; //
  //     html2canvas(aa, {
  //        onrendered: function (canvas) {
  //               $("#previewImage").append(canvas);
  //               getCanvas = canvas;
  //            }
  //        });

  //   var imgageData = getCanvas.toDataURL("image/png");
  //   var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
  //   $("#xiazai").attr("download", "your_pic_name.png").attr("href", newData);
  //   }
  // },
  mounted() {
    var element = $("#html-content-holder"); 
    var getCanvas; 
    html2canvas(element, {
      onrendered: function(canvas) {
        $("#previewImage").append(canvas);
        getCanvas = canvas;
      }
    });

    $("#btn-Convert-Html2Image").on("click", function() {
      var imgageData = getCanvas.toDataURL("image/png");
      var newData = imgageData.replace(
        /^data:image\/png/,
        "data:application/octet-stream"
      );
      $("#btn-Convert-Html2Image")
        .attr("download", "your_pic_name.png")
        .attr("href", newData);
    });
  }
};
</script>



