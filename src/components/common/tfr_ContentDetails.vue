<template>
  <div>
    <slot name="contentDetails">
    <p>几乎在每次托福考试之后，我都可以听到某些同学对着细节题扼腕长叹道：“我怎么这样的题也会错!”是的，我们在上课的时候，反复听着老师一遍遍地说细节题的解题方法，自以为这些方法都早已烂熟于心，但是在做题的过程中却屡屡出错。这是为什么呢? </p>
    <p>　　要解答这个问题，我们首先就要找到出错的地方，然后对症下药。那么接下来，由新东方在线托福教研中心老师为大家介绍考生经常会出错的地方。这些地方大致可以分为以下三种情况： </p>
    <p>　　一、不会定位 <br>
      提及定位，恐怕所有的同学都会说定位非常简单。但是，是不是所有同学都可以准确定位，并且高效地完成阅读中的细节题呢?其实不然，我们来看以下这道出自TPO16套的细节题： <br>
      According to paragraph 2, how did Middle Eastern shop owners treat their workers? <br>
      有的同学一看到这个题目，第一反应就是用Middle Eastern shop owners去原文定位，很快可以找到本段的第二句话：Production was generally in the hands of skilled individual artisans doing piecework under the tutelage of a master who was also the shop owner.但是，当我们读过这句话之后，发现它并没有回答前面的问题，于是我们开始纠结。在将这句话反反复复看了好几遍却仍然找不到答案之后，我们才开始继续往下看。有些同学甚至为了寻找答案干脆将整段看一遍。但是，如果大家一开始在定位的时候，用的是shop owner, treat,和workers来定位，大家就很容易就知道这道题是在问shop owner和workers之间的关系，在读原文第二句话时很快就能发现这句话并没有提到任何与关系相关的单词。于是往下寻找和关系有关的词或者句子。我们很快便会看到后面有一个In these shops differences of rank were blurred，也就是说在这些shop里等级区别模糊了。这不正是说明了owner和worker之间的这种等级关系么?因此，不难确定，这句话才是我们要找的答案。 </p>
    <p>　　二、纠结选项 <br>
      在选项上纠结的这类同学，在对文章的定位上一般不存在问题。他们的问题是，在找到原文之后，却觉得几个选项在文章中都出现过，于是一遍遍地再来读文章。这样做既费时费力，又不一定能对。 <br>
      对于这些同学，新东方在线托福教研中心老师提醒大家，你们需要谨记的就是“符合原文”四个大字。 <br>
      例如TPO2中的一道题，假定通过定位我们已经找到了原文中答案所在的句子：the presence of a fluke1 and blowhole2 cannot disguise their affinities with land dwelling mammals.这道题对应有两个选项： <br>
      A It clearly indicates that cetaceans are mammals.<br>
      B It cannot conceal the fact that cetaceans are mammals. <br>
      这时爱纠结的同学们又开始纠结了，两个都说cetaceans是mammals，怎么选?亲爱的同学们，你们首先要搞清楚原文到底说的是什么，是说“暗示”还是说“不能掩盖”?如果是说暗示，那就选a，因为a选项清楚的有一个indicate，如果是说不能掩盖，那就选b， 因为b选项中有一个cannot conceal。</p>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "tfr_ContentDetails"
  }
</script>

<style scoped>

</style>