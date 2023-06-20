<template>
  <div>
    hi?
    <video id="videoContext">The video will be displayed here</video>
    <!-- <div id="videoContext">The video will be displayed here</div> -->
    bye
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  mounted() {
    const playerConfig = {
      // START LICENSE
      license: "INSERT VOPLAYER LICENSE HERE",
      // END LICENSE
      // qualityLevelFormater: formatQualityLevelForDisplay,
      // textTrackDisplayFormater: formatTextTrackForDisplay,
      // audioTrackDisplayFormater: formatAudioTrackForDisplay,
    };

    const videoContext = document.getElementById("videoContext");
    console.log("videoContext", videoContext);
    console.log("this.$voplayer", this.$voplayer);
    this.$voplayer.createPlayer(videoContext, playerConfig);
  },
};
</script>
