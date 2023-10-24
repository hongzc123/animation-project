<template>
  <div class="carousel-container">
    <div class="carousel-list">
      <div class="carousel-item item-1">1</div>
      <div class="carousel-item item-2">2</div>
      <div class="carousel-item item-3">3</div>
    </div>
    <div class="carousel-arrow carousel-arrow-left">《</div>
    <div class="carousel-arrow carousel-arrow-right">》</div>
    <div class="indicator">
      <span class="active"></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup>
const doms = {
  carouselList: document.querySelector(".carousel-list"),
  arrowLeft: document.querySelector(".carousel-arrow-left"),
  arrowRight: document.querySelector(".carousel-arrow-right"),
  indicator: document.querySelectorAll(".indicator span")
};
const count = doms.indicator.length; // 轮播图数量
console.log(doms);
console.log(count);

const moveTo = index => {
  doms.carouselList.style.transform = `translateX(-${index * 100}%)`;
  doms.carouselList.style.transition = "all 0.5s";
  // 去掉指示器的选中效果
  let active = document.querySelector(".indicator span.active");
  active.classList.remove("active");
  // 添加指示器
  doms.indicator[index].classList.add("active");
};

doms.indicator.forEach((item, i) => {
  item.onclick = () => {
    moveTo(i);
  };
});

const moveLeft = () => {};

const moveRight = () => {};

// doms.arrowLeft.onclick = moveLeft;
// doms.arrowRight.onclick = moveRight;

const init = () => {
  const firstCloned = doms.carouselList.firstElementChild.cloneNode(true);
  const lastCloned = doms.carouselList.lastElementChild.cloneNode(true);
  lastCloned.style.marginLeft = "-100%";
  doms.carouselList.appendChild(firstCloned);
  doms.carouselList.insertBefore(
    lastCloned,
    doms.carouselList.firstElementChild
  );
};

onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 300px;
  height: 150px;
  border: 3px solid #000;
  position: relative;
}
.carousel-list {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}
.carousel-item {
  height: 100%;
  flex: 0 0 100%;
  width: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
}
.indicator {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 3%;

  span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    margin: 0 3px;
    cursor: pointer;
    display: inline-flex;
  }
}
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #ccc;
  opacity: 0.5;
}
.carousel-arrow-left {
  left: 3%;
}
.carousel-arrow-right {
  right: 3%;
}
.item-1 {
  background: orangered;
}
.item-2 {
  background: orange;
}
.item-3 {
  background: greenyellow;
}
</style>