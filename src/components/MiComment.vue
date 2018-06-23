<template>
  <div class="comment-box">
    <div class="item">
      <div class="comment-header layout align-center">
        <div class="avatar-img-box">
          <img :src="comment.user_avatar">
        </div>
        <div class="user-info flex">
          <p class="name">{{comment.user_name}}</p>
          <p class="comment-date">{{comment.add_time}}</p>
        </div>
        <div class="like">
          <span>超爱</span>
        </div>
      </div>
      <div class="comment-content">
        <div class="text">{{comment.comment_content}}</div>
        <div class="photos p6">
          <img v-for="(img,index) in comment.comment_images" :key="index"  v-lazy="img">
        </div>
      </div>
      <div class="comment-reply">
        <div class="comment-replay-item official">
          <div class="text">
            <div class="avatar"></div>
            <span>官方回复：</span>
            {{comment.reply_content}}
          </div>
        </div>
        <div v-for="reply in comment.user_replys" :key="reply.comment_id" class="comment-replay-item">
          <div class="text">
            <div class="avatar">
              <img :src="reply.user_avatar">
            </div>
            <span>{{reply.user_name}}：</span>
           {{reply.reply_content}}
          </div>
        </div>
        <!-- <div class="more border-top-1px">查看全部8条评论</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}  
</script>

<style scoped>
.comment-box {
  background: #fff;
  text-align: left;
}
.comment-box .item {
    padding: 12px 16px 16px;
}
.comment-box .item .comment-header .avatar-img-box {
  margin-right: 12px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100%;
}
.comment-box .item .comment-header .avatar-img-box img {
  width: 100%;
}
.comment-box .item .comment-header .name {
  font-size: 13px;
}
.comment-box .item .comment-header .comment-date {
  margin-top: 2.5px;
  color: rgba(0,0,0,.54);
  font-size: 11px;
}
.comment-box .item .comment-header .like {
  padding-left: 25px;
  background: transparent url(../assets/images/comment-like.png) no-repeat 0;
  background-size: auto 100%;
  width: 25px;
  height: 18px;
  line-height: 18px;
  color: #ff6700;
  font-size: 11px;
}
.comment-box .item .comment-content .text {
  padding: 16px 0;
  line-height: 20px;
  font-size: 13px;
}
.comment-box .item .comment-content .photos {
  margin-bottom: 6px;
}
.comment-box .item .comment-content .photos img {
  width: 83px;
  height: 83px;
  margin: 0 4px 4px 0;
}
.comment-box .item .comment-reply {
  padding: 8px;
  background: #f6f6f6;
}
.comment-box .item .comment-reply .comment-replay-item {
  overflow: hidden;
  padding: 2.5px 0;
}
.comment-box .item .comment-reply .comment-replay-item .text {
  font-size: 11px;
  line-height: 22px;
}
.comment-box .item .comment-reply .comment-replay-item.official .avatar {
  background: transparent url(../assets/images/milogo.png) no-repeat 50%;
  background-size: cover;
}
.comment-box .item .comment-reply .comment-replay-item .avatar {
  float: left;
  width: 16px;
  height: 16px;
  overflow: hidden;
  border-radius: 100%;
  margin-right: 10px;
}
.comment-box .item .comment-reply .comment-replay-item.official span {
  color: #ff6700;
}
</style>

