---
slug: "how-to-sum-numbers-in-array"
title: "How to Sum Numbers in Array?"
date: "2014-12-11T06:20:55"
categories: "ruby"
tags: "blog, ruby, math, sum, inject"
author:
  name: "Tsara"
  picture: '/assets/images/tsara.png'
ogImage:
  url: '/assets/images/posts/how-to-sum-numbers-in-array.jpeg'
excerpt: "In developing application you may find a problem where you have to sum numbers in an array. You may feel confuse of how to do that. Here, I explain how you can solve the problem. Let's say that we have `nums = [1,2,3,4,5]` and the result of sum is 15."
---

In developing application you may find a problem where you have to sum numbers in an array. You may feel confuse of how to do that. Here, I explain how you can solve the problem. Let's say that we have `nums = [1,2,3,4,5]` and the result of sum is 15.

Basically, if we're going to sum the numbers up manually it would be like `nums[0] + nums[1] + nums[2] + nums[3] + nums[4]` or `1 + 2 + 3 + 4 + 5`. But, there's a fastest way to do this. You may use <a href="http://apidock.com/ruby/Enumerable/inject" target="_blank">inject</a> method.

```
nums = [1,2,3,4,5]
nums.inject(:+)
=> 15
```

You can do subtractions, multiplications too. You just have to change the `+` with `-` or `*`. Happy coding!
