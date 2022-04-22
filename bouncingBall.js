function bouncingBall(h,  bounce,  window) {
    if ((h <= 0) || (bounce<=0) || (bounce >= 1) || (window >= h)) {
        return -1
    }
    let ans = 1
    let cnt = h * bounce
    while (cnt > window) {
        ans += 2
        cnt *= bounce
    }
    return ans
  }

console.log(bouncingBall(3.0, 0.66, 1.5))