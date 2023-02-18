# style sheets

```sass
<style lang="sass" scoped>

.my-view
  @media (max-width: $breakpoint-sm-max)
    height: 100px

  @media (min-width: $breakpoint-xs-max)
   height: 300px
</style>
```

```sass
//sass
$breakpoints: (
  phone: 640px,
  tablet: 768px,
  desktop: 1024px,
) !default;

@include media(">phone", "<tablet") {
}

@include media(">tablet", "<950px") {
}
```
