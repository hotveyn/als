<script setup lang="ts">
interface IAccordion {
  id: number;
  title: string;
  text: string;
}

defineProps<{
  accordion: IAccordion;
}>();

const isShowDescription = ref<boolean>(false);
const description = ref<HTMLInputElement | null>(null);

function changeDescriptionVisibility() {
  if (description.value === null) {
    return;
  }

  isShowDescription.value = !isShowDescription.value;
  if (isShowDescription.value) {
    description.value.style.maxHeight =
      description.value.scrollHeight + 50 + "px";
    description.value.style.paddingTop = "25px";
    description.value.style.paddingBottom = "25px";
  } else {
    description.value.style.maxHeight = "0";
    description.value.style.paddingTop = "0";
    description.value.style.paddingBottom = "0";
  }
}
</script>

<template>
  <div
    class="accordion"
    :class="{ active: isShowDescription }"
    @click="changeDescriptionVisibility"
  >
    <div class="accordion__head">
      <p class="accordion__title">
        {{ accordion.title }}
      </p>
      <div class="accordion__arrow">
        <img v-show="isShowDescription" src="/icons/faq/up.svg" alt="up" />
        <img v-show="!isShowDescription" src="/icons/faq/down.svg" alt="down" />
      </div>
    </div>
    <div ref="description" class="accordion__description">
      <p>
        {{ accordion.text }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion {
  transition: color 0.2s;
  user-select: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: 10px;
  border: 3px solid #c7c7c74d;
  box-shadow: 0 4px 4px 0 #d1e1d64d;
  color: #00000099;

  &__head {
    padding: 25px 30px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 20px;
    font-weight: 500;
    line-height: 24.38px;
  }

  &__description {
    box-shadow: inset 0 4px 2px -1px #c7c7c74d;
    padding-left: 30px;
    padding-right: 30px;
    max-height: 0;
    overflow: hidden;
    transition:
      max-height 0.3s,
      padding-top 0.3s,
      padding-bottom 0.3s;
    p {
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 24.38px;
    }
  }
}

.active {
  color: #000000cc;
}
</style>
