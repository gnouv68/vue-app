<template>
<div class="basic-2">
  <div class="container">
      <div class="row">
          <div class="col-lg-12 col-xl-12">
              <div class="text-container">
                  <h2 class="h2-heading">Quy Trình</h2>
              </div> 
          </div>
          <br/>
          <div class="col-lg-12 col-xl-12">
              <h4>Hiện đang trong quá trình {{ current + 1 }}</h4>
    <Steps :current="current">
        <Step title="Nhận biết"></Step>
        <Step title="Nghiên cứu"></Step>
        <Step title="Ký hợp đồng"></Step>
        <Step title="Set up"></Step>
         <Step title="Hoạt động"></Step>
          <Step title="Báo cáo"></Step>
    </Steps>
    <Button style="margin-top:16px" type="primary" @click="next">Next step</Button>
          </div> 
      </div>
  </div> 
</div> 
</template>
<script>
    export default {
        data () {
            return {
                current: 0
            }
        },
        methods: {
            next () {
                if (this.current == 5) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>