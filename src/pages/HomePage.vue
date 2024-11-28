<template>
  <q-page >
    <div>
      <div class="container row q-pa-md justify-center">
        <div
          class="column col-12 col-md-5 justify-center"
          style="min-height: 500px"
        >
          <h4 class="col-3 row items-center justify-center border-bottom" style="margin: 0">
            Welcome to Our Clinic
          </h4>
          <div class="col-6 row text-h5 items-center">
            Welcome to our clinic, contact us now and book your appointment with
            ease,
            <!-- </div>
          <div class="col-3 row text-h5 items-center"> -->
            You can book an appointment through registration or contact us
            directly
          </div>

          <div class="col-3 row justify-evenly items-center full-width">
            <q-btn
              dense
              outline
              rounded
              class="bg-primary text-white appointment-btn"
              label="Appointment"
              style="height: 60px; width: min(50%, 200px)"
            />

            <q-btn
              dense
              outline
              rounded
              no-caps
              class="bg-primary text-white appointment-btn"
              style="height: 60px; width: min(50%, 200px)"
            >
              <div class="row items-center content-center no-wrap">
                <q-icon size="lg" left name="call" />
                <div class="column items-start">
                  <q-item-label caption style="font-size: 0.7rem"
                    >CALL US</q-item-label
                  >
                  <q-item-label>+201020002000</q-item-label>
                </div>
              </div>
            </q-btn>
          </div>
        </div>
        <div class="row col-12 col-md-7 self-center justify-center">
          <q-img src="../assets/png/best.png"> </q-img>
          <h4>Your Health is Our Focus</h4>
        </div>
      </div>
    </div>
  </q-page>

</template>

<script setup lang="ts">
</script>

<!-- class="bg-cyan-1" -->
