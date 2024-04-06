<script setup lang="ts">
const { data: actions } = useFetch("/api/action");
const isModalShow = ref<boolean>(false);

function hideModal() {
  isModalShow.value = false;
}

function showModal() {
  isModalShow.value = true;
}
</script>

<template>
  <section class="actions">
    <div class="actions__content">
      <div class="actions__actions">
        <div
          v-for="(action, index) in actions"
          :key="action.id"
          class="actions__action action"
          @click="showModal"
        >
          <span class="action__name">{{ action.name }}</span>
          <span
            v-if="index + 1 !== actions?.length"
            class="vertical__line"
          ></span>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <TransitionOpacity>
        <ModalBase v-if="isModalShow" @hide-modal="hideModal">
          <ActionOne @close="hideModal" />
        </ModalBase>
      </TransitionOpacity>
    </Teleport>
  </section>
</template>

<style scoped lang="scss">
.actions {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  &__actions {
    width: fit-content;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    gap: 20px;
  }
}

.action {
  display: flex;
  align-items: center;
  gap: 20px;

  &__name {
    cursor: pointer;
    font-weight: 500;
    font-size: adpval(14, 20);
  }
}

.vertical__line {
  display: block;
  width: 1px;
  height: 30px;
  background-color: #333333;

  // &:last-child {
  //   display: none;
  // }
}
@media screen and (max-width: 700px) {
  .actions {
    &__actions {
      flex-direction: column;
      gap: 10px;
    }
  }
  .action {
    flex-direction: column;
    gap: 10px;
  }

  .vertical__line {
    height: 1px;
    width: 200px;
  }
}
</style>
