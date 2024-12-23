<template>
  <q-page>
    <div class="q-pa-md container row items-center" style="height: 100%">
      <div class="col row q-pt-md items-center full-height justify-around">
        <div class="full-width" style="max-width: 600px">
          <h5 class="text-center text-primary">
            {{ t('layout.buttons.location') }}
          </h5>
          <q-card style="height: 448.94px">
            <q-card-section style="height: 412.93px">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221082.55234449208!2d31.554001050000004!3d30.024953199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cffcd270e7%3A0x98b73d687889fd8!2sNew%20Cairo%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1732799492530!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen="true"
              ></iframe>
            </q-card-section>
            <p class="text-center text-primary">
              {{
                `${t('layout.buttons.address')}:
                ${t('layout.buttons.locationAddress')}`
              }}
            </p>
          </q-card>
        </div>

        <div class="full-width" style="max-width: 600px">
          <h5 class="text-center text-primary">
            {{ t('layout.buttons.contactUs') }}
          </h5>
          <q-card>
            <q-card-section>
              <q-form>
                <q-input
                  class="q-mb-md"
                  filled
                  v-model="name"
                  :label="t('pages.contact.name')"
                />
                <q-input
                  class="q-mb-md"
                  filled
                  v-model="email"
                  :label="t('pages.contact.email')"
                />
                <q-input
                  class="q-mb-md"
                  filled
                  v-model="phone"
                  :label="t('pages.contact.phone')"
                />
                <q-input
                  v-model="textareaModel"
                  filled
                  clearable
                  type="textarea"
                  :label="t('pages.contact.message')"
                  :hint="t('pages.contact.hint')"
                />
              </q-form>
            </q-card-section>
            <q-btn
              :label="t('layout.buttons.send')"
              class="full-width"
              color="primary"
            ></q-btn>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const name = ref('');
const email = ref('');
const phone = ref('');
const textareaModel = ref('');
</script>
