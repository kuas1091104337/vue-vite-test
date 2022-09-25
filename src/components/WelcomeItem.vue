<template>
  <div class="item">
    <i> <slot name="icon"></slot> </i>
    <div class="details">
      <h3> <slot name="heading"></slot> </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  margin-top: 30px;
}
.details {
  flex: 1;
  margin-left: 15px;
}
i {
  color: var(--color-text);
  width: 32px;
  height: 32px;
  display: flex;
  place-items: center;
  place-content: center;
}
h3 {
  color: var(--color-heading);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
}
</style>
