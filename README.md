### JavaScript30 따라하기

#### 1. drum kit

url : https://javascript30.com/

---

### 코드

```javascript
function play(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  audio.play(); //해당 오디오 태그 플레이
  audio.currentTime = 0; //플레이 후 초기화

  key.classList.add("playing"); //해당 key의 class에 .playing추가
  setTimeout(() => {
    // 50ms 후에 .playing 제거
    key.classList.remove("playing");
  }, 50);
}
window.addEventListener("keydown", play); // window. 으로 이벤트 리스너 추가가능
```

### 알게된 점

- div[data-key="${event.keyCode}"] 와 같이 태그안에 data-\*\* 을 통해 값을 지정해주고 배열에서 가져오듯이 인덱스 값으로 해당 태그만 가져올 수 있다.
