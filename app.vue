<template>
  <div>
    hi?
    <video id="videoContext">The video will be displayed here</video>
    bye
  </div>
</template>

<script setup>
const videoContext = ref(null);
onMounted(() => {
  const { $voplayer } = useNuxtApp();
  console.log("$voplayer", $voplayer);

  const playerConfig = {
    // START LICENSE
    license: "INSERT VOPLAYER LICENSE HERE",
    // END LICENSE
    // qualityLevelFormater: formatQualityLevelForDisplay,
    // textTrackDisplayFormater: formatTextTrackForDisplay,
    // audioTrackDisplayFormater: formatAudioTrackForDisplay,
  };

  $voplayer.createPlayer(videoContext, playerConfig);
});
</script>
