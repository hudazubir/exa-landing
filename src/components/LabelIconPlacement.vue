<template>
  <div :class="['label-icon-placement', className]">
    <div class="icon">
      <ProfileCircle class="profile-circle" color="#A1A5B7" />
    </div>
    <div class="text-wrapper">Medium</div>
  </div>
</template>

<script>
// import { ProfileCircle } from "./ProfileCircle";

export default {
  name: "LabelIconPlacement",
  components: {
    // ProfileCircle
  },
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.label-icon-placement {
  align-items: center;
  border: 1px solid;
  border-color: var(--graygray-300);
  border-radius: 6px;
  display: flex;
  gap: 12px;
  height: 38px;
  left: 270px;
  position: relative;
  top: 35px;
  width: 180px;
}

.label-icon-placement .icon {
  align-items: center;
  align-self: stretch;
  background-color: var(--graygray-100);
  border: 1px solid;
  border-color: var(--graygray-300);
  border-radius: 6px 0px 0px 6px;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 38px;
}

.label-icon-placement .profile-circle {
  height: 20px !important;
  margin-bottom: -3.00px !important;
  margin-left: -3.00px !important;
  margin-right: -3.00px !important;
  margin-top: -3.00px !important;
  position: relative !important;
  width: 20px !important;
}

.label-icon-placement .text-wrapper {
  color: var(--graygray-600);
  font-family: var(--body-b-12-12-600-font-family);
  font-size: var(--body-b-12-12-600-font-size);
  font-style: var(--body-b-12-12-600-font-style);
  font-weight: var(--body-b-12-12-600-font-weight);
  letter-spacing: var(--body-b-12-12-600-letter-spacing);
  line-height: var(--body-b-12-12-600-line-height);
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
