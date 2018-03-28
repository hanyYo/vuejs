
    <article class="lst_recomm">
      <h1 class="tit" v-html="swapToBr(slug)"></h1>
      <div class="slider_wrap">
        <div id="recomm_goods" class="frame">
          <ul class="lst_goods smalltype sample">
            <li class="swiper-slide" v-for="(item, index) in items">
                <a :href="makeLink(item, '', slug+title, 'wonder-pick-'+slug+title+'-'+(index+1),'','item',group_no )"
              target="_blank"
              :data-category="'wonder-pick-'+slug+title" :data-action="(index+1)" :data-label="item.link || item.mobile_link"
              @click="_ga()">
                <span class="img_thumb">
                    <wshop-image src="/static/img/m/default.png" :data-src="item.thumb"
          :data-alt="item.slug" data-class="rt-hot-deal-test" onerror="this.style='display:none';
          "></wshop-image>
                </span>
                <div class="cont">
                  <span class="tit_brand">[[item.org]]</span>
                  <strong class="tit_main_copy">[[item.slug]][[item.title]]</strong>
                  <span class="num price">[[item.price|currency]]</span>
                  <span class="won">원</span>
                  <span class="wdpay" v-show="(item.data && item.data.w_pay)">
                    <img src="/static/img/m/ico_wdpay.png" alt="원더페이 가능" class="ico_pay">
                    <!-- <span class="save">859원 적립</span> -->
                  </span>
                  <span class="review_cnt" v-show="item.review_count > 0">
                    리뷰
                    <span class="num">[[(item.review_count||0)|currency]]</span>
                  </span>
                  <span class="benefit">
                        <template v-if="(item.data && item.data.shipping == 0)">
                            <span class="item" >무료배송</span>
                        </template>
                        <template v-if="(item.data && item.data.coupon)">
                            <span class="item" >할인혜택</span>
                        </template>
                        <template v-if="(item.data && item.data.card_event)">
                            <span class="item" >카드할인</span>
                        </template>
                        <template v-if="(item.data && item.data.event_words)">
                            <span class="item">이벤트</span>
                        </template>
                  </span>
                </div>
              </a>
              <wishlist-button :item=item></wishlist-button>
            </li>
          </ul>
          <div class="ctrl_direction">
            <button type="button" class="btn_prev" @click="minusCounter">이전 상품 4개 보기</button>
            <div class="paging">
              <span v-for="n in pages" :class="{on:n === page}"></span>
            </div>
            <button type="button" class="btn_next" @click="addCounter">다음 상품 4개 보기</button>
          </div>
        </div>
      </div>
    </article>
