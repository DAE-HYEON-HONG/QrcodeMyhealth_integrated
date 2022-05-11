<template>
  <div>
    <div class="w-100 mb-5">
      <div class="notQR">
        <div
          class="notQRBox"
          style="border: 1px solid #5c5c5c; border-radius: 10px; overflow: auto;"
        >
          <div>
            <div class="mt-3 p-4 font-weight-bold" style="height: 10%">
              <div>
                <div :class="mainTitle" style="font-size: 22px; color: #333333">
                  <span :class="mainTitle">
                    {{ $t("응급상황에") }}
                  </span>
                  <span :class="mainTitle"> {{ $t("필요한 질문에") }}</span>
                  <span :class="mainTitle"> {{ $t("대답해주세요.") }}</span>
                </div>
                <div :class="UseTitle" style="font-size: 22px; color: #333">
                  <span :class="UseTitle">{{ $t("저장된 정보를") }}</span>
                  <span :class="UseTitle"> {{ $t("활용할까요?") }}</span>
                </div>
              </div>
              <!-- <small
                :class="mainTitle"
                style="color: #888888; font-size: 17px; padding-top: 30px; font-weight: 300;"
              >
                {{ $t("질문은 총 10개입니다") }}.
              </small> -->
              <hr />
            </div>
            <div :class="UseSubtitle" style="font-size: 18px; color: #888">
              <p>
                {{ $t("이미 저장된 정보가 있습니다") }}<br />{{
                  $t("기존 정보를 연결할까요?")
                }}
              </p>
              <br />
              <button class="UseCookiesBtn mt-2" @click.prevent="UseCookies">
                {{ $t("저장된 정보 연결하기") }}
              </button>
            </div>
          </div>

          <div :class="NewInput">
            <div>
              <div class="pl-4 pr-4">
                <!-- <p style="font-size: 14px; color: #888">
                  {{ $t("저장된 정보를 연결하면 기존에 입력하신") }}<br />{{
                    $t("정보가 연결되어 저장됩니다")
                  }}
                </p> -->
                <!-- <br /> -->
                <p style="font-size: 18px; color: #888">
                  {{ $t("새로운 정보를 입력하시고자 하는 경우에는") }}<br />{{
                    $t("새로 입력하기를 선택해주세요")
                  }}
                </p>
                <button
                  class="UseCookiesBtn mt-4"
                  style="font-size: 18px;"
                  @click.prevent="dontuseCookies"
                >
                  {{ $t("새로 입력하기") }}
                </button>
              </div>
            </div>
          </div>

          <div :class="main">
            <!-- 혈액형 -->
            <div>
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%">
                <div class="d-flex">
                  <p style="font-size: 18px; font-weight: 700; color: #333333">
                    {{ $t("1. 혈액형을 선택해주세요") }}
                  </p>
                </div>
                <small style="color: red;">{{ $t(bc) }}</small>
              </div>
              <div class="mt-3" style="font-size: 18px;">
                <div class="pl-4 pr-4">
                  <div class="d-flex">
                    <label
                      for="Ablood"
                      :class="A"
                      @click.prevent="BloodColorA"
                      style="color: #888888; font-size: 1"
                      >{{ $t("A형") }}</label
                    >
                    <label
                      for="ABblood"
                      :class="AB"
                      @click.prevent="BloodColorAB"
                      style="color: #888888"
                      >{{ $t("AB형") }}</label
                    >
                  </div>
                  <div class="d-flex mt-1">
                    <label
                      for="Bblood"
                      :class="B"
                      @click.prevent="BloodColorB"
                      style="color: #888888"
                      >{{ $t("B형") }}</label
                    >
                    <label
                      for="Oblood"
                      :class="O"
                      @click.prevent="BloodColorO"
                      style="color: #888888"
                      >{{ $t("O형") }}</label
                    >
                  </div>
                  <label
                    for="Notblood"
                    :class="idkB"
                    @click.prevent="BloodColorNone"
                    style="color: #888888"
                    >{{ $t("모름 / 공개를 원하지 않음") }}</label
                  >
                  <div :class="RhS">
                    <input
                      type="checkbox"
                      v-model="RH"
                      value="RH"
                      id="RH"
                      @change="RhChk"
                    />
                    <label for="RH" class="ml-2">{{ $t("RH- 선택") }}</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- 생년월일 -->
            <div class="mt-4">
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%;">
                <div class="d-flex" id="yourBirthDay">
                  <p style="font-size: 18px; font-weight: 700; color: #333333">
                    {{ $t("2. 생년월일을 입력해주세요") }}
                  </p>
                </div>
                <small style="color: red;">{{ $t(yc) }}</small>
              </div>
              <div class="mt-3" style="font-size: 18px;">
                <div class="pl-4 pr-4">
                  <div class="d-flex">
                    <input
                      type="number"
                      :placeholder="$t('연도')"
                      class="year"
                      v-model="years"
                      @keyup="SaveYears"
                    />
                    <input
                      type="number"
                      :placeholder="$t('월')"
                      class="day"
                      v-model="month"
                      @keyup="SaveYears"
                    />
                    <input
                      type="number"
                      :placeholder="$t('일')"
                      class="day"
                      v-model="days"
                      @keyup="SaveYears"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- 성별선택 -->
            <div class="mt-4">
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%">
                <div class="d-flex">
                  <p style="font-weight: 700; font-size: 18px; color: #333333">
                    {{ $t("3. 성별을 선택해주세요") }}
                  </p>
                </div>
                <small style="color: red;">{{ $t(sec) }}</small>
              </div>
              <div class="mt-3" style="font-size: 18px;">
                <div class="pl-4 pr-4">
                  <div class="d-flex">
                    <label
                      :class="woman"
                      @click.prevent="onWoman"
                      style="color: #888888"
                      >{{ $t("여성") }}</label
                    >
                    <label
                      :class="man"
                      @click.prevent="onMan"
                      style="color: #888888"
                      >{{ $t("남성") }}</label
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- 수술내역 -->
            <div class="mt-4">
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%">
                <div class="d-flex">
                  <p style="font-weight: 700; font-size: 18px; color: #333333">
                    {{ $t("4. 수술 내역을 입력해주세요.") }}
                    <span style="font-weight: 300; color: #555555">{{
                      $t("(중복선택가능)")
                    }}</span>
                  </p>
                </div>
                <small style="color: red;">{{ $t(sc) }}</small>
              </div>
              <div class="mt-3" style="font-size: 16px;">
                <form style="font-size: 18px;">
                  <div class="pl-4 pr-4">
                    <div class="d-flex">
                      <input
                        type="checkbox"
                        name="arm"
                        id="arm"
                        class="notshow"
                        v-model="sergeryNameArm"
                      />
                      <label class="sergery" for="arm" value="arm">{{
                        $t("암 수술")
                      }}</label>
                      <select
                        class="sergeryItems arm"
                        v-model="sergeryYearArm"
                        @change="saveSergeryArm"
                      >
                        <option value="">{{ $t("수술 시기") }}</option>
                        <option value="1">{{ $t("1년 이내") }}</option>
                        <option value="3">{{ $t("3년 이내") }}</option>
                        <option value="5">{{ $t("5년 이내") }}</option>
                        <option value="5+">{{ $t("5년 초과") }}</option>
                        <option value="idk">{{
                          $t("모름 / 공개를 원하지 않음")
                        }}</option>
                      </select>
                    </div>
                    <div class="d-flex">
                      <input
                        type="checkbox"
                        name="simjang"
                        id="simjang"
                        class="notshow"
                        v-model="sergeryNameSimjang"
                      />
                      <label class="sergery" for="simjang" value="simjang">{{
                        $t("심장 수술")
                      }}</label>
                      <select
                        class="sergeryItems simjang"
                        v-model="sergeryYearSimjang"
                        @change="saveSergerySimjang"
                      >
                        <option value="">{{ $t("수술 시기") }}</option>
                        <option value="1">{{ $t("1년 이내") }}</option>
                        <option value="3">{{ $t("3년 이내") }}</option>
                        <option value="5">{{ $t("5년 이내") }}</option>
                        <option value="5+">{{ $t("5년 초과") }}</option>
                        <option value="idk">{{
                          $t("모름 / 공개를 원하지 않음")
                        }}</option>
                      </select>
                    </div>
                    <div class="d-flex">
                      <input
                        type="checkbox"
                        name="pe"
                        id="pe"
                        class="notshow"
                        v-model="sergeryNamePe"
                      />
                      <label class="sergery" for="pe" value="pe">{{
                        $t("폐 수술")
                      }}</label>
                      <select
                        class="sergeryItems pe"
                        v-model="sergeryYearPe"
                        @change="saveSergeryPe"
                      >
                        <option value="">{{ $t("수술 시기") }}</option>
                        <option value="1">{{ $t("1년 이내") }}</option>
                        <option value="3">{{ $t("3년 이내") }}</option>
                        <option value="5">{{ $t("5년 이내") }}</option>
                        <option value="5+">{{ $t("5년 초과") }}</option>
                        <option value="idk">{{
                          $t("모름 / 공개를 원하지 않음")
                        }}</option>
                      </select>
                    </div>
                    <div class="d-flex">
                      <input
                        type="checkbox"
                        name="neoi"
                        id="neoi"
                        class="notshow"
                        v-model="sergeryNameNeoi"
                      />
                      <label class="sergery" for="neoi" value="neoi">{{
                        $t("뇌혈관 수술")
                      }}</label>
                      <select
                        class="sergeryItems neoi"
                        v-model="sergeryYearNeoi"
                        @change="saveSergeryNeoi"
                      >
                        <option value="">{{ $t("수술 시기") }}</option>
                        <option value="1">{{ $t("1년 이내") }}</option>
                        <option value="3">{{ $t("3년 이내") }}</option>
                        <option value="5">{{ $t("5년 이내") }}</option>
                        <option value="5+">{{ $t("5년 초과") }}</option>
                        <option value="idk">{{
                          $t("모름 / 공개를 원하지 않음")
                        }}</option>
                      </select>
                    </div>
                    <div class="d-flex">
                      <input
                        type="checkbox"
                        name="gan"
                        id="gan"
                        class="notshow"
                        v-model="sergeryNameGan"
                      />
                      <label class="sergery" for="gan" value="gan">{{
                        $t("간 수술")
                      }}</label>
                      <select
                        class="sergeryItems gan"
                        v-model="sergeryYearGan"
                        @change="saveSergeryGan"
                      >
                        <option value="">{{ $t("수술 시기") }}</option>
                        <option value="1">{{ $t("1년 이내") }}</option>
                        <option value="3">{{ $t("3년 이내") }}</option>
                        <option value="5">{{ $t("5년 이내") }}</option>
                        <option value="5+">{{ $t("5년 초과") }}</option>
                        <option value="idk">{{
                          $t("모름 / 공개를 원하지 않음")
                        }}</option>
                      </select>
                    </div>
                    <div
                      class="d-flex"
                      v-for="(sergeryADD, index) in sergeryItems"
                      :key="index"
                    >
                      <input
                        type="text"
                        v-model="sergeryADD.input"
                        :placeholder="$t('직접입력')"
                        :class="sergeryItems[index].Inputclass"
                        @keyup.prevent="SergeryUserSer(index)"
                        style="font-size: 14px;"
                      />
                      <select
                        v-model="sergeryADD.option"
                        :class="sergeryItems[index].SelectClass"
                        @change.prevent="saveSergery"
                        style="margin-left: 0.5rem;"
                      >
                        <option value="">{{ $t("수술 시기") }}</option>
                        <option value="1">{{ $t("1년 이내") }}</option>
                        <option value="3">{{ $t("3년 이내") }}</option>
                        <option value="5">{{ $t("5년 이내") }}</option>
                        <option value="5+">{{ $t("5년 초과") }}</option>
                        <option value="idk">{{
                          $t("모름 / 공개를 원하지 않음")
                        }}</option>
                      </select>
                    </div>
                    <button
                      class="d-flex buttonSize"
                      @click.prevent="addSergery"
                    >
                      <span style="font-size: 18px; color:#2E77EF">+</span>
                      <span style="font-size: 18px; color:#2E77EF">
                        {{ $t("수술 내역 추가") }}</span
                      >
                    </button>
                    <button
                      :class="sergeryNoneBtn"
                      type="reset"
                      @click="saveSergeryNone"
                    >
                      {{ $t("수술을 받은 적이 없음") }}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- 병선택 -->
            <div class="mt-4">
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%">
                <div class="d-flex">
                  <p style="font-weight: 700; font-size: 18px; color: #333333">
                    {{ $t("5. 현재 투병중인 병을 선택해주세요.") }}
                    <span style="font-weight: 300; color: #555555">{{
                      $t("(중복선택가능)")
                    }}</span>
                  </p>
                </div>
                <small style="color: red;">{{ $t(ic) }}</small>
              </div>
              <div class="mt-3" style="font-size: 18px;">
                <div class="pl-4 pr-4">
                  <div>
                    <form>
                      <input
                        type="checkbox"
                        name="arm"
                        id="arm2"
                        class="notshow"
                        v-model="illArm"
                        @change="IllArmBtn"
                      />
                      <label
                        class="illBtn arm2"
                        style="color: #888888"
                        for="arm2"
                        >{{ $t("암") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="simjang2"
                        class="notshow"
                        v-model="illSimjang"
                        @change="IllSimBtn"
                      />
                      <label
                        class="illBtn simjang2"
                        style="color: #888888"
                        for="simjang2"
                        >{{ $t("심장 질환") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="pe2"
                        class="notshow"
                        v-model="illpe"
                        @change="IllPeBtn"
                      />
                      <label
                        class="illBtn pe2"
                        style="color: #888888"
                        for="pe2"
                        >{{ $t("폐 질환") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="neoi2"
                        class="notshow"
                        v-model="illNeoi"
                        @change="IllNeoiBtn"
                      />
                      <label
                        class="illBtn neoi2"
                        style="color: #888888"
                        for="neoi2"
                        >{{ $t("뇌혈관 질환") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="gan2"
                        class="notshow"
                        v-model="illgan"
                        @change="IllGanBtn"
                      />
                      <label
                        class="illBtn gan2"
                        style="color: #888888"
                        for="gan2"
                        >{{ $t("간 질환") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="dang"
                        class="notshow"
                        v-model="illDang"
                        @change="IllDangBtn"
                      />
                      <label
                        class="illBtn dang"
                        style="color: #888888"
                        for="dang"
                        >{{ $t("당뇨") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="gohyeol"
                        class="notshow"
                        v-model="illGo"
                        @change="IllGoBtn"
                      />
                      <label
                        class="illBtn gohyeol"
                        style="color: #888888"
                        for="gohyeol"
                        >{{ $t("고혈압") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="chi"
                        class="notshow"
                        v-model="illChi"
                        @change="IllChiBtn"
                      />
                      <label
                        class="illBtn chi"
                        style="color: #888888"
                        for="chi"
                        >{{ $t("치매") }}</label
                      >
                      <div v-for="(ill, index) in illItems" :key="ill.idx">
                        <input
                          type="text"
                          v-model="ill.input"
                          :placeholder="$t('직접입력병')"
                          :class="illItems[index].class"
                          @keyup.prevent="illUserSer(index)"
                        />
                      </div>
                      <button class="buttonSize" @click.prevent="addIll">
                        <span style="font-size: 18px; color:#2E77EF">+</span>
                        <span style="font-size: 18px; color:#2E77EF"
                          >&nbsp;{{ $t("병 이름 추가") }}</span
                        >
                      </button>
                      <button
                        :class="IllNoneBtn"
                        type="reset"
                        @click="resetIll"
                      >
                        {{ $t("현재 앓고 있는 병은 없음") }}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <!-- 약선택 -->
            <div class="mt-4">
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%">
                <div class="d-flex">
                  <p style="font-weight: 700; font-size: 18px; color: #333333">
                    {{ $t("6. 현재 복용중인 약을 선택해주세요.") }}
                    <span style="font-weight: 300; color: #555555">{{
                      $t("(중복선택가능)")
                    }}</span>
                  </p>
                </div>
                <small style="color: red;">{{ $t(mc) }}</small>
              </div>
              <div class="mt-3" style="font-size: 18px;">
                <div class="pl-4 pr-4">
                  <div>
                    <form>
                      <input
                        type="checkbox"
                        name="arm"
                        id="arm3"
                        class="notshow"
                        v-model="Marm"
                        @change="addMedicineArm"
                      />
                      <label
                        class="medicineBtn arm3"
                        style="color: #888888"
                        for="arm3"
                        >{{ $t("항암제") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="simjang3"
                        class="notshow"
                        v-model="Msim"
                        @change="addMedicineSim"
                      />
                      <label
                        class="medicineBtn simjang3"
                        style="color: #888888"
                        for="simjang3"
                        >{{ $t("심장 약") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="pe3"
                        class="notshow"
                        v-model="Mpe"
                        @change="addMedicinePe"
                      />
                      <label
                        class="medicineBtn pe3"
                        style="color: #888888"
                        for="pe3"
                        >{{ $t("폐 약") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="neoi3"
                        class="notshow"
                        v-model="Mneoi"
                        @change="addMedicineNeoi"
                      />
                      <label
                        class="medicineBtn neoi3"
                        style="color: #888888"
                        for="neoi3"
                        >{{ $t("뇌혈관 약") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="gan3"
                        class="notshow"
                        v-model="Mgan"
                        @change="addMedicineGan"
                      />
                      <label
                        class="medicineBtn gan3"
                        style="color: #888888"
                        for="gan3"
                        >{{ $t("간 약") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="dang2"
                        class="notshow"
                        v-model="Mdang"
                        @change="addMedicineDang"
                      />
                      <label
                        class="medicineBtn dang2"
                        style="color: #888888"
                        for="dang2"
                        >{{ $t("당뇨 약") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="gohyeol2"
                        class="notshow"
                        v-model="Mgo"
                        @change="addMedicineGo"
                      />
                      <label
                        class="medicineBtn gohyeol2"
                        style="color: #888888"
                        for="gohyeol2"
                        >{{ $t("고혈압 약") }}</label
                      >
                      <input
                        type="checkbox"
                        name="arm"
                        id="chi2"
                        class="notshow"
                        v-model="Mchi"
                        @change="addMedicineChi"
                      />
                      <label
                        class="medicineBtn chi2"
                        style="color: #888888"
                        for="chi2"
                        >{{ $t("치매 약") }}</label
                      >
                      <div
                        v-for="(medicine, index) in medicineItems"
                        :key="medicine.idx"
                      >
                        <input
                          type="text"
                          v-model="medicine.input"
                          :placeholder="$t('직접입력약')"
                          :class="medicineItems[index].class"
                          @keyup.prevent="MedicineUserSer(index)"
                        />
                      </div>
                      <button class="buttonSize" @click.prevent="addMedicine">
                        <span style="font-size: 18px; color:#2E77EF">+</span>
                        <span style="font-size: 18px; color:#2E77EF"
                          >&nbsp;{{ $t("약 이름 추가") }}</span
                        >
                      </button>
                      <button
                        :class="medicineNoneBtn"
                        type="reset"
                        @click="resetMedicine"
                      >
                        {{ $t("현재 복용중인 약은 없음") }}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%">
                <div class="d-flex">
                  <p style="font-weight: 700; font-size: 18px; color: #333333">
                    {{ $t("7. 알레르기 정보를 입력해주세요") }}
                  </p>
                </div>
                <small style="color: red;">{{ $t(ac) }}</small>
              </div>
              <div class="mt-3" style="font-size: 18px;">
                <div class="pl-4 pr-4">
                  <div>
                    <form>
                      <input
                        type="text"
                        :placeholder="$t('알레르기 정보를 입력해주세요')"
                        :class="alergyInput"
                        v-model="alergyInputer"
                        @keyup.prevent="alergyInputEvent"
                        style="text-align: left; padding-left: 0.5rem; padding-right: 0.5rem;"
                      />
                      <div
                        v-for="(alergy, index) in alergyItems"
                        :key="alergy.idx"
                        :class="alergyClass"
                      >
                        <input
                          type="text"
                          v-model="alergy.input"
                          :class="alergyItems[index].class"
                          :placeholder="$t('직접입력')"
                          @keyup.prevent="alergyUserSer(index)"
                        />
                      </div>
                      <button
                        class="d-flex buttonSize"
                        @click.prevent="addAlergy"
                      >
                        <span style="font-size: 18px; color:#2E77EF">+</span>
                        <span style="font-size: 18px; color:#2E77EF"
                          >&nbsp;{{ $t("알레르기 추가") }}</span
                        >
                      </button>
                      <button
                        :class="alergyNoneBtn"
                        type="reset"
                        @click.prevent="resetAlergy"
                      >
                        {{ $t("알레르기 없음") }}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%">
                <div class="d-flex">
                  <p style="font-weight: 700; font-size: 18px; color: #333333">
                    {{ $t("8. 조영제 부작용이 있으신가요?") }}
                  </p>
                </div>
                <small style="color: red;">{{ $t(sic) }}</small>
              </div>
              <div class="mt-3" style="font-size: 18px;">
                <div class="pl-4 pr-4">
                  <div class="d-flex">
                    <label
                      :class="sideEffTrue"
                      @click.prevent="sideEffTrueBtn"
                      style="color: #888888"
                      >{{ $t("있음") }}</label
                    >
                    <label
                      :class="sideEffFalse"
                      @click.prevent="sideEffFalseBtn"
                      style="color: #888888"
                      >{{ $t("없음") }}</label
                    >
                  </div>
                  <label
                    :class="sideEffNone"
                    style="color: #888888"
                    @click.prevent="sideEffNoneBtn"
                    >{{ $t("모름 / 공개를 원하지 않음") }}</label
                  >
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%">
                <div class="d-flex">
                  <p style="font-weight: 700; font-size: 18px; color: #333333">
                    {{ $t("9. 보호자 연락처를 입력해주세요") }}
                  </p>
                </div>
                <small style="color: red;">{{ $t(nc) }}</small>
              </div>
              <div class="mt-3" style="font-size: 18px;">
                <div class="pl-4 pr-4">
                  <div>
                    <form>
                      <input
                        type="number"
                        :placeholder="$t('보호자 연락처를 입력해 주세요')"
                        :class="phoneInput"
                        v-model="PhoneInputer"
                        @keyup="PhoneInputEvent"
                        style="text-align: left; padding-left: 0.5rem; padding-right: 0.5rem;"
                      />
                      <div
                        v-for="(phone, index) in phoneItems"
                        :key="phone.idx"
                        :class="phoneClass"
                      >
                        <input
                          type="number"
                          v-model="phoneItems[index].input"
                          :placeholder="$t('직접입력')"
                          :class="phoneItems[index].class"
                          @keyup="phoneUserSer(index)"
                        />
                      </div>
                      <button
                        class="d-flex buttonSize"
                        @click.prevent="addPhone"
                      >
                        <span style="font-size: 18px; color:#2E77EF">+</span>
                        <span style="font-size: 18px; color:#2E77EF"
                          >&nbsp;{{ $t("보호자 연락처 추가") }}</span
                        >
                      </button>
                      <button
                        :class="PhoneNumberNone"
                        type="reset"
                        @click="resetPhone"
                      >
                        {{ $t("연락처 공개를 원하지 않음") }}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 mb-4">
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%">
                <div class="d-flex">
                  <p style="font-weight: 700; font-size: 18px; color: #333333">
                    {{ $t("10. 기타 응급상황에 필요한 정보를 입력해주세요") }}
                  </p>
                </div>
              </div>
              <div class="mt-3" style="font-size: 18px;">
                <div class="pl-4 pr-4">
                  <div>
                    <input
                      type="text"
                      :placeholder="
                        $t('응급상황에 필요한 정보를 입력해주세요!')
                      "
                      maxlength="300"
                      class="alergyInput"
                      style="text-align: left; padding-left: 0.5rem; padding-right: 0.5rem;"
                      v-model="others"
                      @keyup="saveOthers"
                    />
                    <br />
                    <small style="color: #888888; font-size: 16px;">{{
                      $t("최대 300자까지 입력이 가능합니다")
                    }}</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 mb-4">
              <div class="mt-3 pl-4 pr-4 font-weight-bold" style="height: 10%">
                <div class="d-flex">
                  <p style="font-weight: 700; font-size: 18px; color: #333333">
                    {{ $t("비밀번호") }}
                  </p>
                </div>
              </div>
              <div class="mt-3" style="font-size: 18px;">
                <div class="pl-4 pr-4">
                  <div>
                    <input
                      type="number"
                      :placeholder="$t('비밀번호 입력')"
                      class="pwInput"
                      v-model="pw"
                    />
                    <small style="color: red;">{{ $t(pc) }}</small>
                    <input
                      type="number"
                      :placeholder="$t('비밀번호 확인')"
                      class="pwInput"
                      v-model="pw2"
                    />
                    <small style="color: red;">{{ $t(pc2) }}</small>
                    <br />
                    <small style="color: #888888; font-size: 16px;">{{
                      $t("비밀번호는 4자리 숫자로 가능합니다")
                    }}</small
                    ><br />
                    <small style="color: #888888; font-size: 16px;">{{
                      $t("비밀번호는 관리자도 알 수 없습니다")
                    }}</small
                    ><br />
                    <small style="color: #888888; font-size: 16px;">{{
                      $t("비밀번호를 분실 시 수정이 불가능합니다")
                    }}</small>
                    <br />
                  </div>
                  <button
                    class="btn btn-primary w-100 mt-4"
                    @click.prevent="onSubmit"
                    style="width: 320px; height: 48px; background-color: #2E77EF; font-size: 19px;"
                  >
                    {{ $t("완료") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.sequence9.com/server",
});

export default {
  beforeMount() {
    this.$store.state.Navbar.Toggle = "d-none";
    let chkCookies = this.$cookies.get("QRCODE_blood");
    if (chkCookies === null) {
      this.mainTitle = "";
      this.main = "";
      this.UseTitle = "notshow";
      this.UseSubtitle = "notshow";
      this.NewInput = "notshow";
    } else {
      this.mainTitle = "notshow";
      this.main = "notshow";
      this.UseTitle = "";
      this.UseSubtitle = "pl-4 pr-4";
      this.NewInput = "mt-5";
    }
    if (this.$store.state.Info.qrlist === "") {
      alert(this.$t("잘못된 경로입니다."));
      this.$router.push("/");
    }
  },

  data() {
    return {
      //저장된 정보
      mainTitle: "",
      main: "",
      UseTitle: "notshow",
      UseSubtitle: "notshow",
      NewInput: "notshow",
      //비밀번호
      pw: "",
      pw2: "",
      //생년월일
      years: "",
      month: "",
      days: "",
      //혈액형
      bloodType: "",
      A: "blood",
      AB: "blood ml-3",
      B: "blood",
      O: "blood ml-3",
      idkB: "nothing",
      RhS: "",
      RH: false,
      //성별
      sex: "",
      man: "SexSelect ml-2",
      woman: "SexSelect",
      //알러지
      alergyNoneBtn: "illBtn",
      alergyInputer: "",
      alergyNone: "",
      alergyChk: false,
      alergyInput: "alergyInput",
      alergyClass: "notShow",
      alergyUser: [],
      alergyIdx: 0,
      alergyItems: [
        {
          idx: this.alergyIdx,
          input: "",
          class: "illBtn2",
        },
      ],
      //약
      medicineNoneBtn: "illBtn",
      Marm: false,
      Msim: false,
      Mpe: false,
      Mneoi: false,
      Mgan: false,
      Mdang: false,
      Mgo: false,
      Mchi: false,
      medicine: [],
      medicineUser: [],
      medicineIdx: 1,
      medicineItems: [
        {
          idx: this.medicineIdx,
          input: "",
          class: "illBtn2",
        },
      ],
      //병
      IllNoneBtn: "illBtn",
      illArm: false,
      illSimjang: false,
      illpe: false,
      illNeoi: false,
      illgan: false,
      illDang: false,
      illGo: false,
      illChi: false,
      ill: [],
      illIdx: 1,
      illItems: [
        {
          idx: this.illIdx,
          input: "",
          class: "illBtn2",
        },
      ],
      //수술
      sergeryNoneBtn: "illBtn",
      sergeryNone: "",
      sergeryArm: "",
      sergerySimjang: "",
      sergerype: "",
      sergeryNeoi: "",
      sergeryGan: "",
      sergeryNameArm: false,
      sergeryYearArm: "",
      sergeryNameSimjang: false,
      sergeryYearSimjang: "",
      sergeryNamePe: false,
      sergeryYearPe: "",
      sergeryNameNeoi: false,
      sergeryYearNeoi: "",
      sergeryNameGan: false,
      sergeryYearGan: "",
      sergeryIdx: 0,
      addSergeryItem: "",
      sergeryItems: [
        {
          idx: this.sergeryIdx,
          input: "",
          option: "",
          Inputclass: "Addsergery",
          SelectClass: "AddsergeryItems",
        },
      ],
      //조영제 부작용
      sideEffTrue: "sideEffbtn",
      sideEffFalse: "sideEffbtn ml-2",
      sideEffNone: "sideEffbtn2",
      sideEff: "",
      //전화번호
      PhoneNumberNone: "illBtn",
      PhoneNone: "",
      PhoneInputer: "",
      PhoneInfoChk: false,
      phoneInput: "alergyInput",
      phoneClass: "notShow",
      phoneUser: [],
      phoneIdx: 0,
      phoneItems: [
        {
          idx: this.phoneIdx,
          input: "",
          class: "illBtn2",
        },
      ],
      //기타응급상황
      others: "",
      //에러
      bc: "",
      yc: "",
      sec: "",
      sc: "",
      ic: "",
      mc: "",
      ac: "",
      sic: "",
      nc: "",
      pc: "",
      pc2: "",
    };
  },

  methods: {
    //생년월일
    //생년월일 yearsChk는 created에서 자동 시작
    yearsChk() {
      let birth = this.$cookies.get("QRCODE_years");
      let birth2 = birth.split("-");
      this.years = birth2[0];
      this.month = birth2[1];
      this.days = birth2[2];
    },
    SaveYears() {
      let birth = this.years + "-" + this.month + "-" + this.days;
      this.$cookies.set("QRCODE_years", birth);
    },
    //혈액형
    //BloodChk는 created에서 시작하도록함. 쿠키로 저장.
    BloodChk() {
      if (this.$cookies.get("QRCODE_blood") == "A") {
        this.BloodColorA();
      } else if (this.$cookies.get("QRCODE_blood") == "AB") {
        this.BloodColorAB();
      } else if (this.$cookies.get("QRCODE_blood") == "B") {
        this.BloodColorB();
      } else if (this.$cookies.get("QRCODE_blood") == "O") {
        this.BloodColorO();
      } else if (this.$cookies.get("QRCODE_blood") == "NaN") {
        this.BloodColorNone();
      }
    },
    RhChk() {
      if (this.bloodType === "A" || this.bloodType === "ARH-") {
        this.BloodColorA();
      } else if (this.bloodType === "AB" || this.bloodType === "ABRH-") {
        this.BloodColorAB();
      } else if (this.bloodType === "B" || this.bloodType === "BRH-") {
        this.BloodColorB();
      } else if (this.bloodType === "O" || this.bloodType === "ORH-") {
        this.BloodColorO();
      }
    },
    BloodColorA() {
      if (this.RH === false) {
        this.bloodType = "A";
        this.A = "blood f5b blueFont";
        this.AB = "blood ml-3";
        this.B = "blood";
        this.O = "blood ml-3";
        this.idkB = "nothing";
        this.RhS = "";
        this.$cookies.set("QRCODE_blood", "A");
        this.$cookies.set("QRCODE_RH", false);
      } else {
        this.bloodType = "ARH-";
        this.A = "blood f5b blueFont";
        this.AB = "blood ml-3";
        this.B = "blood";
        this.O = "blood ml-3";
        this.idkB = "nothing";
        this.RhS = "";
        this.$cookies.set("QRCODE_blood", "A");
        this.$cookies.set("QRCODE_RH", true);
      }
    },
    BloodColorAB() {
      if (this.RH === false) {
        this.bloodType = "AB";
        this.AB = "blood f5b ml-3 blueFont";
        this.A = "blood";
        this.B = "blood";
        this.O = "blood ml-3";
        this.idkB = "nothing";
        this.RhS = "";
        this.$cookies.set("QRCODE_blood", "AB");
        this.$cookies.set("QRCODE_RH", false);
      } else {
        this.bloodType = "ABRH-";
        this.AB = "blood f5b ml-3 blueFont";
        this.A = "blood";
        this.B = "blood";
        this.O = "blood ml-3";
        this.idkB = "nothing";
        this.RhS = "";
        this.$cookies.set("QRCODE_blood", "AB");
        this.$cookies.set("QRCODE_RH", true);
      }
    },
    BloodColorB() {
      if (this.RH === false) {
        this.bloodType = "B";
        this.B = "blood f5b blueFont";
        this.AB = "blood ml-3";
        this.A = "blood";
        this.O = "blood ml-3";
        this.idkB = "nothing";
        this.RhS = "";
        this.$cookies.set("QRCODE_blood", "B");
        this.$cookies.set("QRCODE_RH", false);
      } else {
        this.bloodType = "BRH-";
        this.B = "blood f5b blueFont";
        this.AB = "blood ml-3";
        this.A = "blood";
        this.O = "blood ml-3";
        this.idkB = "nothing";
        this.RhS = "";
        this.$cookies.set("QRCODE_blood", "B");
        this.$cookies.set("QRCODE_RH", true);
      }
    },
    BloodColorO() {
      if (this.RH === false) {
        this.bloodType = "O";
        this.O = "blood f5b ml-3 blueFont";
        this.B = "blood";
        this.AB = "blood ml-3";
        this.A = "blood";
        this.idkB = "nothing";
        this.RhS = "";
        this.$cookies.set("QRCODE_blood", "O");
        this.$cookies.set("QRCODE_RH", false);
      } else {
        this.bloodType = "ORH-";
        this.O = "blood f5b ml-3 blueFont";
        this.B = "blood";
        this.AB = "blood ml-3";
        this.A = "blood";
        this.idkB = "nothing";
        this.RhS = "";
        this.$cookies.set("QRCODE_blood", "O");
        this.$cookies.set("QRCODE_RH", true);
      }
    },
    BloodColorNone() {
      this.bloodType = "NaN";
      this.idkB = "nothing f5b blueFont";
      this.O = "blood ml-3";
      this.B = "blood";
      this.AB = "blood ml-3";
      this.A = "blood";
      this.RH = false;
      this.RhS = "d-none";
      this.$cookies.set("QRCODE_blood", "None");
    },
    //성별
    //created에 쿠키 정보 시작
    SexChk() {
      let Sex = this.$cookies.get("sex");
      if (Sex === "man") {
        this.onMan();
      } else {
        this.onWoman();
      }
    },
    onMan() {
      this.sex = "man";
      this.man = "SexSelect f5b ml-2 blueFont";
      this.woman = "SexSelect";
      this.$cookies.set("QRCODE_sex", "man");
    },
    onWoman() {
      this.sex = "woman";
      this.woman = "SexSelect f5b blueFont";
      this.man = "SexSelect ml-2";
      this.$cookies.set("QRCODE_sex", "woman");
    },
    //알러지
    alergyUserSer(index) {
      if (this.alergyItems[index].input !== "") {
        this.alergyItems[index].class = "illBtn2 UserSer";
      } else if (this.alergyItems[index].input === "") {
        this.alergyItems[index].class = "illBtn2";
      }
    },
    alergyInputEvent() {
      if (this.alergyInputer != "") {
        this.alergyInput = "alergyInput";
        this.$cookies.set("QRCODE_alergyInput", this.alergyInputer);
        this.alergyNone = "";
        this.alergyNoneBtn = "illBtn";
        this.alergyChk = true;
      } else {
        this.alergyInput = "alergyInput";
      }
    },
    resetAlergy() {
      this.alergyNoneBtn = "illBtn f5b blueFont";
      this.alergyNone = "Nothing";
      this.alergyItems.splice(0);
      this.alergyChk = true;
      this.alergyInputer = "";
      this.alergyInputEvent();
      this.$cookies.set("QRCODE_alergyInput", "Nothing");
    },
    addAlergy() {
      if (this.alergyIdx === 0) {
        this.alergyIdx++;
        this.alergyClass = "show";
      } else {
        this.alergyNoneBtn = "illBtn";
        this.alergyNone = "";
        this.alergyItems.push({
          idx: this.alergyIdx++,
          input: "",
          class: "illBtn2",
        });
        this.alergyClass = "show";
      }
    },
    //수술
    // saveUserSergery(idxSergery) {
    //   if (this.sergeryItems[idxSergery].input !== "") {
    //     this.$cookies.set(
    //       "QRCODE_sergeryUserName",
    //       this.sergeryItems[idxSergery].input
    //     );
    //     this.$cookies.set(
    //       "QRCODE_sergeryUserSelect",
    //       this.sergeryItems[idxSergery].option
    //     );
    //   }
    // },
    saveSergeryArm() {
      this.sergeryNoneBtn = "illBtn";
      this.sergeryNameArm = true;
      this.sergeryNone = "";
      if (this.sergeryNameArm === true) {
        if (this.sergeryYearArm !== "") {
          this.$cookies.set("QRCODE_sergeryNameArm", true);
          this.$cookies.set("QRCODE_sergeryYearArm", this.sergeryYearArm);
          this.sergeryArm = `암 수술(${this.sergeryYearArm})`;
        }
      } else {
        this.sergeryArm = ``;
        this.$cookies.remove("QRCODE_sergeryNameArm");
        this.$cookies.remove("QRCODE_sergeryYearArm");
      }
    },
    saveSergerySimjang() {
      this.sergeryNoneBtn = "illBtn";
      this.sergeryNameSimjang = true;
      this.sergeryNone = "";
      if (this.sergeryNameSimjang === true) {
        if (this.sergeryYearSimjang !== "") {
          this.$cookies.set("QRCODE_sergeryNameSimjang", true);
          this.$cookies.set(
            "QRCODE_sergeryYearSimjang",
            this.sergeryYearSimjang
          );
          this.sergerySimjang = `심장 수술(${this.sergeryYearSimjang})`;
        }
      } else {
        this.sergerySimjang = ``;
        this.$cookies.remove("QRCODE_sergeryNameSimjang");
        this.$cookies.remove("QRCODE_sergeryYearSimjang");
      }
    },
    saveSergeryPe() {
      this.sergeryNoneBtn = "illBtn";
      this.sergeryNamePe = true;
      this.sergeryNone = "";
      if (this.sergeryNamePe === true) {
        if (this.sergeryYearPe !== "") {
          this.$cookies.set("QRCODE_sergeryNamePe", true);
          this.$cookies.set("QRCODE_sergeryYearPe", this.sergeryYearPe);
          this.sergerype = `폐 수술(${this.sergeryYearPe})`;
        }
      } else {
        this.sergerype = ``;
        this.$cookies.remove("QRCODE_sergeryNamePe");
        this.$cookies.remove("QRCODE_sergeryYearPe");
      }
    },
    saveSergeryNeoi() {
      this.sergeryNoneBtn = "illBtn";
      this.sergeryNameNeoi = true;
      this.sergeryNone = "";
      if (this.sergeryNameNeoi === true) {
        if (this.sergeryYearNeoi !== "") {
          this.$cookies.set("QRCODE_sergeryNameNeoi", true);
          this.$cookies.set("QRCODE_sergeryYearNeoi", this.sergeryYearNeoi);
          this.sergeryNeoi = `뇌경색 수술(${this.sergeryYearNeoi})`;
        }
      } else {
        this.sergeryNeoi = ``;
        this.$cookies.remove("QRCODE_sergeryNameNeoi");
        this.$cookies.remove("QRCODE_sergeryYearNeoi");
      }
    },
    saveSergeryGan() {
      this.sergeryNoneBtn = "illBtn";
      this.sergeryNameGan = true;
      this.sergeryNone = "";
      if (this.sergeryNameGan === true) {
        if (this.sergeryYearGan !== "") {
          this.$cookies.set("QRCODE_sergeryNameGan", true);
          this.$cookies.set("QRCODE_sergeryYearGan", this.sergeryYearGan);
          this.sergeryGan = `간 수술(${this.sergeryYearGan})`;
        }
      } else {
        this.$cookies.remove("QRCODE_sergeryNameGan");
        this.$cookies.remove("QRCODE_sergeryYearGan");
        this.sergeryGan = ``;
      }
    },
    saveSergeryNone() {
      this.sergeryNoneBtn = "illBtn f5b";
      this.sergeryNone = "Nothing";
      this.sergeryItems.splice(0);
      this.sergeryIdx = 0;
      this.sergeryItems.push({
        idx: this.sergeryIdx,
        input: "",
        option: "",
        Inputclass: "Addsergery",
        SelectClass: "AddsergeryItems",
      });
      //연도 초기화
      this.sergeryYearArm = "";
      this.sergeryYearSimjang = "";
      this.sergeryYearPe = "";
      this.sergeryYearNeoi = "";
      this.sergeryYearGan = "";
      //배열 초기화
      this.sergeryArm = ``;
      this.sergerySimjang = ``;
      this.sergerype = ``;
      this.sergeryNeoi = ``;
      this.sergeryGan = ``;
      //모두 해제
      this.sergeryNameArm = false;
      this.sergeryNameSimjang = false;
      this.sergeryNamePe = false;
      this.sergeryNameNeoi = false;
      this.sergeryNameGan = false;
      //쿠키삭제
      this.$cookies.remove("QRCODE_sergeryNameArm");
      this.$cookies.remove("QRCODE_sergeryYearArm");
      this.$cookies.remove("QRCODE_sergeryNameSimjang");
      this.$cookies.remove("QRCODE_sergeryYearSimjang");
      this.$cookies.remove("QRCODE_sergeryNamePe");
      this.$cookies.remove("QRCODE_sergeryYearPe");
      this.$cookies.remove("QRCODE_sergeryNameNeoi");
      this.$cookies.remove("QRCODE_sergeryYearNeoi");
      this.$cookies.remove("QRCODE_sergeryNameGan");
      this.$cookies.remove("QRCODE_sergeryYearGan");
      this.$cookies.set("QRCODE_sergeryNone", "yes");
    },
    saveSergery() {
      this.addSergeryItem +=
        "," +
        this.sergeryItems[this.sergeryIdx].input +
        " ,(" +
        this.sergeryItems[this.sergeryIdx].option +
        ")";
    },
    addSergery() {
      this.sergeryNoneBtn = "illBtn";
      if (this.sergeryItems.length > 4) {
        alert("최대 5개의 수술기록만 추가 가능합니다.");
      } else {
        let idxSergery = this.sergeryIdx++;
        this.sergeryItems.push({
          idx: idxSergery,
          input: "",
          option: "",
          Inputclass: "Addsergery",
          SelectClass: "AddsergeryItems",
        });
        // this.saveUserSergery(idxSergery);
      }
    },
    SergeryUserSer(index) {
      if (this.sergeryItems[index].input !== "") {
        this.sergeryItems[index].Inputclass = "Addsergery";
        this.sergeryItems[index].SelectClass = "AddsergeryItems UserSer";
        this.sergeryNoneBtn = "illBtn";
      } else if (this.sergeryItems[index].input === "") {
        this.sergeryItems[index].Inputclass = "Addsergery";
        this.sergeryItems[index].SelectClass = "AddsergeryItems";
      }
    },
    //병
    illUserSer(index) {
      if (this.illItems[index].input !== "") {
        this.illItems[index].class = "illBtn2 UserSer";
      } else if (this.illItems[index].input === "") {
        this.illItems[index].class = "illBtn2";
        this.IllremoveArray(this.illItems[index].input);
      }
    },

    addIll() {
      this.IllNoneBtn = "illBtn";
      this.illItems.push({
        idx: this.illIdx++,
        input: "",
        class: "illBtn2",
      });
    },

    resetIll() {
      this.IllNoneBtn = "illBtn f5b blueFont";
      this.illItems.splice(0);
      this.ill.splice(0);
      this.ill.push("Nothing");
      this.illArm = false;
      this.illSimjang = false;
      this.illillpe = false;
      this.illNeoi = false;
      this.illgan = false;
      this.illDang = false;
      this.illGo = false;
      this.illChi = false;
      this.IllArmBtn();
      this.IllSimBtn();
      this.IllPeBtn();
      this.IllNeoiBtn();
      this.IllGanBtn();
      this.IllDangBtn();
      this.IllGoBtn();
      this.IllChiBtn();
      this.$cookies.set("QRCODE_Illreset", true);
      this.$cookies.remove("QRCODE_Illarm");
      this.$cookies.remove("QRCODE_IllSim");
      this.$cookies.remove("QRCODE_Illpe");
      this.$cookies.remove("QRCODE_Illneoi");
      this.$cookies.remove("QRCODE_Illgan");
      this.$cookies.remove("QRCODE_Illdang");
      this.$cookies.remove("QRCODE_IllGo");
      this.$cookies.remove("QRCODE_IllChi");
    },
    //배열 삭제
    // IllremoveArray(Send) {
    //   const findItem = this.medicine.find(function(item) {
    //     return item === Send;
    //   });
    //   const idx = this.ill.indexOf(findItem);
    //   this.ill.splice(idx, 1);
    // },
    IllArmBtn() {
      if (this.illArm === true) {
        this.ill.splice(0);
        this.$cookies.set("QRCODE_Illarm", true);
        this.IllNoneBtn = "illBtn";
      } else {
        this.$cookies.remove("QRCODE_Illarm");
      }
    },
    IllSimBtn() {
      if (this.illSimjang === true) {
        this.ill.splice(0);
        this.$cookies.set("QRCODE_IllSim", true);
        this.IllNoneBtn = "illBtn";
      } else {
        this.$cookies.remove("QRCODE_IllSim");
      }
    },
    IllPeBtn() {
      if (this.illpe === true) {
        this.ill.splice(0);
        this.$cookies.set("QRCODE_Illpe", true);
        this.IllNoneBtn = "illBtn";
      } else {
        this.$cookies.remove("QRCODE_Illpe");
      }
    },
    IllNeoiBtn() {
      if (this.illNeoi === true) {
        this.ill.splice(0);
        this.$cookies.set("QRCODE_Illneoi", true);
        this.IllNoneBtn = "illBtn";
      } else {
        this.$cookies.remove("QRCODE_Illneoi");
      }
    },
    IllGanBtn() {
      if (this.illgan === true) {
        this.ill.splice(0);
        this.$cookies.set("QRCODE_Illgan", true);
        this.IllNoneBtn = "illBtn";
      } else {
        this.$cookies.remove("QRCODE_Illgan");
      }
    },
    IllDangBtn() {
      if (this.illDang === true) {
        this.ill.splice(0);
        this.$cookies.set("QRCODE_Illdang", true);
        this.IllNoneBtn = "illBtn";
      } else {
        this.$cookies.remove("QRCODE_Illdang");
      }
    },
    IllGoBtn() {
      if (this.illGo === true) {
        this.ill.splice(0);
        this.$cookies.set("QRCODE_IllGo", true);
        this.IllNoneBtn = "illBtn";
      } else {
        this.$cookies.remove("QRCODE_IllGo");
      }
    },
    IllChiBtn() {
      if (this.illChi === true) {
        this.ill.splice(0);
        this.$cookies.set("QRCODE_IllChi", true);
        this.IllNoneBtn = "illBtn";
      } else {
        this.$cookies.remove("QRCODE_IllChi");
      }
    },
    //약
    addMedicine() {
      this.medicineNoneBtn = "illBtn";
      this.medicineItems.push({
        idx: this.medicineIdx++,
        input: "",
        class: "illBtn2",
      });
    },
    addMedicineArm() {
      if (this.Marm === true) {
        this.medicine.push("Marm");
        this.$cookies.set("QRCODE_MEDIArm", "arm");
        this.$cookies.remove("QRCODE_MEDI");
        this.medicineNoneBtn = "illBtn";
      } else {
        this.MedicineremoveArray("arm");
        this.$cookies.remove("QRCODE_MEDIArm");
      }
    },
    addMedicineSim() {
      if (this.Msim === true) {
        this.medicine.push("Msim");
        this.$cookies.set("QRCODE_MEDISim", "sim");
        this.$cookies.remove("QRCODE_MEDI");
        this.medicineNoneBtn = "illBtn";
      } else {
        this.MedicineremoveArray("sim");
        this.$cookies.remove("QRCODE_MEDISim");
      }
    },
    addMedicinePe() {
      if (this.Mpe === true) {
        this.medicine.push("Mpe");
        this.$cookies.set("QRCODE_MEDIPe", "pe");
        this.$cookies.remove("QRCODE_MEDI");
        this.medicineNoneBtn = "illBtn";
      } else {
        this.MedicineremoveArray("pe");
        this.$cookies.remove("QRCODE_MEDIPe");
      }
    },
    addMedicineNeoi() {
      if (this.Mneoi === true) {
        this.medicine.push("Mneoi");
        this.$cookies.set("QRCODE_MEDINeoi", "neoi");
        this.$cookies.remove("QRCODE_MEDI");
        this.medicineNoneBtn = "illBtn";
      } else {
        this.MedicineremoveArray("neoi");
        this.$cookies.remove("QRCODE_MEDINeoi");
      }
    },
    addMedicineGan() {
      if (this.Mgan === true) {
        this.medicine.push("Mgan");
        this.$cookies.set("QRCODE_MEDIGan", "gan");
        this.$cookies.remove("QRCODE_MEDI");
        this.medicineNoneBtn = "illBtn";
      } else {
        this.MedicineremoveArray("gan");
        this.$cookies.remove("QRCODE_MEDIGan");
      }
    },
    addMedicineDang() {
      if (this.Mdang === true) {
        this.medicine.push("Mdang");
        this.$cookies.set("QRCODE_MEDIDang", "dang");
        this.$cookies.remove("QRCODE_MEDI");
        this.medicineNoneBtn = "illBtn";
      } else {
        this.MedicineremoveArray("dang");
        this.$cookies.remove("QRCODE_MEDIDang");
      }
    },
    addMedicineGo() {
      if (this.Mgo === true) {
        this.medicine.push("Mgo");
        this.$cookies.set("QRCODE_MEDIGo", "go");
        this.$cookies.remove("QRCODE_MEDI");
        this.medicineNoneBtn = "illBtn";
      } else {
        this.MedicineremoveArray("go");
        this.$cookies.remove("QRCODE_MEDIGo");
      }
    },
    addMedicineChi() {
      if (this.Mchi === true) {
        this.medicine.push("Mchi");
        this.$cookies.set("QRCODE_MEDIChi", "chi");
        this.$cookies.remove("QRCODE_MEDI");
        this.medicineNoneBtn = "illBtn";
      } else {
        this.MedicineremoveArray("chi");
        this.$cookies.remove("QRCODE_MEDIChi");
      }
    },
    async MedicineremoveArray(Send) {
      const findItem = this.medicine.find(
        await function(item) {
          return item === Send;
        }
      );
      const idx = this.medicine.indexOf(findItem);
      this.medicine.splice(idx, 1);
    },
    MedicineUserSer(index) {
      if (this.medicineItems[index].input !== "") {
        this.medicineItems[index].class = "illBtn2 UserSer";
      } else if (this.medicineItems[index].input === "") {
        this.medicineItems[index].class = "illBtn2";
      }
    },
    resetMedicine() {
      this.medicineItems.splice(0);
      this.medicine.splice(0);
      this.medicineNoneBtn = "illBtn f5b blueFont";
      this.medicine.push("Nothing");
      this.$cookies.set("QRCODE_MEDI", "None");
    },
    //전화번호
    addPhone() {
      if (this.phoneIdx === 0) {
        this.phoneIdx++;
        this.phoneClass = "show";
      } else {
        this.PhoneNone = "";
        this.PhoneNumberNone = "illBtn";
        this.phoneItems.push({
          idx: this.phoneIdx++,
          input: "",
          class: "illBtn2",
        });
        this.phoneClass = "show";
      }
    },
    //전화번호
    PhoneInputEvent() {
      if (this.PhoneInputer !== "") {
        this.phoneInput = "illBtn2 UserSer";
        this.$cookies.set("QRCODE_phone", this.PhoneInputer);
        this.PhoneNone = "";
        this.PhoneInfoChk = true;
        this.PhoneNumberNone = "illBtn";
      } else {
        this.phoneInput = "illBtn2";
      }
    },
    resetPhone() {
      this.PhoneNumberNone = "illBtn f5b blueFont";
      this.PhoneNone = "none";
      this.PhoneInfoChk = true;
      this.phoneItems.splice(0);
      this.PhoneInputer = "";
      this.PhoneInputEvent();
      this.$cookies.set("QRCODE_phone", "none");
    },
    phoneUserSer(index) {
      if (this.phoneItems[index].input !== "") {
        this.phoneItems[index].class = "illBtn2 UserSer";
      } else if (this.phoneItems[index].input === "") {
        this.phoneItems[index].class = "illBtn2";
      }
    },
    //조영제 부작용
    sideEffTrueBtn() {
      this.sideEff = "있음";
      this.sideEffFalse = "sideEffbtn ml-2";
      this.sideEffTrue = "sideEffbtn UserSer blueFont";
      this.sideEffNone = "sideEffbtn2";
      this.$cookies.set("QRCODE_SideEff", this.sideEff);
    },
    sideEffFalseBtn() {
      this.sideEff = "없음";
      this.sideEffTrue = "sideEffbtn";
      this.sideEffFalse = "sideEffbtn ml-2 UserSer blueFont";
      this.sideEffNone = "sideEffbtn2";
      this.$cookies.set("QRCODE_SideEff", this.sideEff);
    },
    sideEffNoneBtn() {
      this.sideEff = "None";
      this.sideEffTrue = "sideEffbtn";
      this.sideEffNone = "sideEffbtn2 UserSer blueFont";
      this.sideEffFalse = "sideEffbtn ml-2";
      this.$cookies.set("QRCODE_SideEff", this.sideEff);
    },
    //기타 쿠키저장
    saveOthers() {
      this.$cookies.set("QRCODE_ohters", this.others);
    },
    //저장된 정보 활용
    dontuseCookies() {
      this.mainTitle = "";
      this.main = "";
      this.UseTitle = "notshow";
      this.UseSubtitle = "notshow pl-4 pr-4";
      this.NewInput = "notshow mt-5";
    },
    usesideEffCookies() {
      let sideEff = this.$cookies.get("QRCODE_SideEff");
      if (sideEff === "없음") {
        this.sideEffFalseBtn();
      } else if (sideEff === "있음") {
        this.sideEffTrueBtn();
      } else if (sideEff === "None") {
        this.sideEffNoneBtn();
      }
    },
    usePhoneCookies() {
      let Phone = this.$cookies.get("QRCODE_phone");
      if (Phone !== "none") {
        this.PhoneInputer = this.$cookies.get("QRCODE_phone");
        this.PhoneInputEvent();
      }
      if (Phone == "none") {
        this.resetPhone();
      }
    },
    useIllCookies() {
      if (this.$cookies.get("QRCODE_Illarm")) {
        this.illArm = true;
        this.IllArmBtn();
      }
      if (this.$cookies.get("QRCODE_IllSimBtn")) {
        this.illSimjang = true;
        this.IllSimBtn();
      }
      if (this.$cookies.get("QRCODE_Illpe")) {
        this.illpe = true;
        this.IllPeBtn();
      }
      if (this.$cookies.get("QRCODE_Illneoi")) {
        this.illNeoi = true;
        this.IllNeoiBtn();
      }
      if (this.$cookies.get("QRCODE_Illgan")) {
        this.illgan = true;
        this.IllGanBtn();
      }
      if (this.$cookies.get("QRCODE_Illdang")) {
        this.illDang = true;
        this.IllDangBtn();
      }
      if (this.$cookies.get("QRCODE_IllGo")) {
        this.illGo = true;
        this.IllGoBtn();
      }
      if (this.$cookies.get("QRCODE_IllChi")) {
        this.illChi = true;
        this.IllChiBtn();
      }
      if (this.$cookies.get("QRCODE_Illreset")) {
        this.resetIll();
      }
    },
    useMedicineCookies() {
      if (this.$cookies.get("QRCODE_MEDI") === "None") {
        this.resetMedicine();
      }
      if (this.$cookies.get("QRCODE_MEDIArm") === "arm") {
        this.Marm = true;
        this.addMedicineArm();
      }
      if (this.$cookies.get("QRCODE_MEDISim") === "sim") {
        this.Msim = true;
        this.addMedicineSim();
      }
      if (this.$cookies.get("QRCODE_MEDIPe") === "pe") {
        this.Mpe = true;
        this.addMedicinePe();
      }
      if (this.$cookies.get("QRCODE_MEDINeoi") === "neoi") {
        this.Mneoi = true;
        this.addMedicineNeoi();
      }
      if (this.$cookies.get("QRCODE_MEDIGan") === "gan") {
        this.Mgan = true;
        this.addMedicineGan();
      }
      if (this.$cookies.get("QRCODE_MEDIDang") === "dang") {
        this.Mdang = true;
        this.addMedicineDang();
      }
      if (this.$cookies.get("QRCODE_MEDIGo") === "go") {
        this.Mgo = true;
        this.addMedicineGo();
      }
      if (this.$cookies.get("QRCODE_MEDIChi") === "chi") {
        this.Mchi = true;
        this.addMedicineChi();
      }
    },
    UseSergeryCookies() {
      if (this.$cookies.get("QRCODE_sergeryNameArm") == "true") {
        this.sergeryNameArm = true;
        this.sergeryYearArm = this.$cookies.get("QRCODE_sergeryYearArm");
        this.saveSergeryArm();
      }
      if (this.$cookies.get("QRCODE_sergeryNameSimjang") == "true") {
        this.sergeryNameSimjang = true;
        this.sergeryYearSimjang = this.$cookies.get(
          "QRCODE_sergeryYearSimjang"
        );
        this.saveSergerySimjang();
      }
      if (this.$cookies.get("QRCODE_sergeryNamePe") == "true") {
        this.sergeryNamePe = true;
        this.sergeryYearPe = this.$cookies.get("QRCODE_sergeryYearPe");
        this.saveSergeryPe();
      }
      if (this.$cookies.get("QRCODE_sergeryNameNeoi") == "true") {
        this.sergeryNameNeoi = true;
        this.sergeryYearNeoi = this.$cookies.get("QRCODE_sergeryYearNeoi");
        this.saveSergeryNeoi();
      }
      if (this.$cookies.get("QRCODE_sergeryNameGan") == "true") {
        this.sergeryNameGa = true;
        this.sergeryYearGan = this.$cookies.get("QRCODE_sergeryYearGan");
        this.saveSergeryGan();
      }
      if (this.$cookies.get("QRCODE_sergeryNone") === "yes") {
        this.saveSergeryNone();
      }
    },
    UseAlergyCookies() {
      let Alergy = this.$cookies.get("QRCODE_alergyInput");
      if (Alergy == "Nothing") {
        this.resetAlergy();
      } else {
        this.alergyInput = this.$cookies.get("QRCODE_alergyInput");
        this.alergyInputEvent();
      }
    },
    UseCookies() {
      this.SexChk();
      this.BloodChk();
      this.yearsChk();
      this.useMedicineCookies();
      this.usesideEffCookies();
      this.usePhoneCookies();
      this.UseSergeryCookies();
      this.useIllCookies();
      this.UseAlergyCookies();
      this.others = this.$cookies.get("QRCODE_ohters");
      this.mainTitle = "";
      this.main = "";
      this.UseTitle = "notshow";
      this.UseSubtitle = "notshow";
      this.NewInput = "notshow";
      this.RH = this.$cookies.get("QRCODE_RH");
      this.RhChk();
    },
    illCheckArray() {
      if (this.illArm === true) {
        this.ill.push("illArm");
      }
      if (this.illSimjang === true) {
        this.ill.push("illSim");
      }
      if (this.illpe === true) {
        this.ill.push("illPe");
      }
      if (this.illNeoi === true) {
        this.ill.push("illNeoi");
      }
      if (this.illgan === true) {
        this.ill.push("illGan");
      }
      if (this.illDang === true) {
        this.ill.push("illDang");
      }
      if (this.illGo === true) {
        this.ill.push("illGo");
      }
      if (this.illChi === true) {
        this.ill.push("illChi");
      }
    },
    onSubmit() {
      this.illCheckArray();
      let formData = new FormData();
      let sergeryUsers = JSON.stringify(this.sergeryItems);
      let illUsers = JSON.stringify(this.illItems);
      let medicineUsers = JSON.stringify(this.medicineItems);
      let alergyUsers = JSON.stringify(this.alergyItems);
      let phoneUsers = JSON.stringify(this.phoneItems);
      let birth = this.years + "-" + this.month + "-" + this.days;
      let sergeryChk =
        this.sergeryNone +
        this.sergeryArm +
        this.sergerySimjang +
        this.sergerype +
        this.sergeryNeoi +
        this.sergeryGan;
      if (this.bloodType === "") {
        alert(this.$t("혈액형을 선택해주세요!"));
        this.bc = "필수 입력항목입니다.";
        this.ill.splice(0);
      } else if (birth === "") {
        alert(this.$t("생년월일을 제대로 입력해주세요!"));
        this.yc = "필수 입력항목입니다.";
        this.bc = "";
        this.ill.splice(0);
      } else if (this.sex === "") {
        alert(this.$t("성별을 선택해주세요"));
        this.sec = "필수 입력항목입니다.";
        this.yc = "";
        this.bc = "";
        this.ill.splice(0);
      } else if (sergeryChk === "") {
        if (this.sergeryItems[0].input === "") {
          alert(this.$t("수술내역이 정확하지 않습니다."));
          this.sc = "필수 입력항목입니다.";
          this.sec = "";
          this.yc = "";
          this.bc = "";
          this.ill.splice(0);
        }
      } else if (this.ill.length == 0) {
        if (this.illItems.length == 1) {
          if (this.illItems[0].input == "") {
            alert(this.$t("투병중이신 병이 제대로 선택되지 않았습니다."));
            this.ic = "필수 입력항목입니다.";
            this.sc = "";
            this.sec = "";
            this.yc = "";
            this.bc = "";
            this.ill.splice(0);
          }
        }
      } else if (this.medicine.length === 0) {
        if (this.medicineItems.length == 1) {
          if (this.medicineItems[0].input === "") {
            alert(this.$t("복용중이신 약을 선택해주세요."));
            this.mc = "필수 입력항목입니다.";
            this.ic = "";
            this.sc = "";
            this.sec = "";
            this.yc = "";
            this.bc = "";
            this.ill.splice(0);
          }
        }
      } else if (this.alergyChk == false) {
        alert(this.$t("알러지 정보를 입력해주세요"));
        this.ac = "필수 입력항목입니다.";
        this.mc = "";
        this.ic = "";
        this.sc = "";
        this.sec = "";
        this.yc = "";
        this.bc = "";
        this.ill.splice(0);
      }
      if (this.sideEff === "") {
        alert(this.$t("조영제 부작용을 선택해주세요"));
        this.ill.splice(0);
        this.sic = "필수 입력항목입니다.";
        this.ac = "";
        this.mc = "";
        this.ic = "";
        this.sc = "";
        this.sec = "";
        this.yc = "";
        this.bc = "";
      } else if (this.PhoneInfoChk == false) {
        alert(this.$t("연락처를 입력해주세요"));
        this.nc = "필수 입력항목입니다.";
        this.sic = "";
        this.ac = "";
        this.mc = "";
        this.ic = "";
        this.sc = "";
        this.sec = "";
        this.yc = "";
        this.bc = "";
        this.ill.splice(0);
      } else if (this.pw === "") {
        alert(this.$t("비밀번호를 입력해주세요."));
        this.pc = "필수 입력항목입니다.";
        this.nc = "";
        this.sic = "";
        this.ac = "";
        this.mc = "";
        this.ic = "";
        this.sc = "";
        this.sec = "";
        this.yc = "";
        this.bc = "";
        this.ill.splice(0);
      } else if (this.pw !== this.pw2) {
        alert(this.$t("비밀번호가 일치하지 않습니다."));
        this.pc2 = "필수 입력항목입니다.";
        this.pc = "필수 입력항목입니다.";
        this.nc = "";
        this.sic = "";
        this.ac = "";
        this.mc = "";
        this.ic = "";
        this.sc = "";
        this.sec = "";
        this.yc = "";
        this.bc = "";
        this.ill.splice(0);
      } else if (this.pw2.length !== 4) {
        alert(this.$t("비밀번호가 4자리가 아닙니다."));
        this.ill.splice(0);
      } else {
        let sergerySelect =
          this.sergeryNone +
          "," +
          this.sergeryArm +
          "," +
          this.sergerySimjang +
          "," +
          this.sergerype +
          "," +
          this.sergeryNeoi +
          "," +
          this.sergeryGan;
        formData.append("bloodType", this.bloodType);
        formData.append("birthDay", birth);
        formData.append("sex", this.sex);
        formData.append("sergery", sergerySelect);
        formData.append("sergeryUser", sergeryUsers);
        formData.append("ill", this.ill);
        formData.append("illUser", illUsers);
        formData.append("medicine", this.medicine);
        formData.append("medicineUser", medicineUsers);
        formData.append("alergy", this.alergyInputer);
        formData.append("alergyNone", this.alergyNone);
        formData.append("PhoneNone", this.PhoneNone);
        formData.append("alergyUser", alergyUsers);
        formData.append("sideEff", this.sideEff);
        formData.append("phone", this.PhoneInputer);
        formData.append("phoneUser", phoneUsers);
        formData.append("others", this.others);
        formData.append("pw", this.pw);
        formData.append("qrlist", this.$store.state.Info.qrlist);

        instance.post("/emQRUpload", formData).then((res) => {
          if (res.data === true) {
            this.$router.push("/QRsucces");
          } else {
            alert(this.$t("데이터서버와 접속에 실패했습니다."));
          }
        });
      }
    },
  },
};
</script>

<style>
* {
  transition: ease 0.3s;
}
.notQRBox {
  -ms-overflow-style: none;
}
.notQRBox::-webkit-scrollbar {
  display: none;
}
.notshow {
  display: none;
}
.show {
  display: block;
}
.blueFont {
  color: white !important;
}
.blood {
  width: 50%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.f5b {
  background-color: #2e77ef !important;
  color: white !important;
}
.nothing {
  width: 100%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.year {
  width: 45%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  text-align: center;
}
.day {
  width: 25%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-left: 0.5rem;
  text-align: center;
}
.SexSelect {
  width: 50%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sergery {
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.sergeryItems {
  width: 50%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
}
.Addsergery {
  width: 50%;
  height: 40px;
  margin-bottom: 8px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.UserSer {
  background-color: #2e77ef !important;
  color: white !important;
}
.AddsergeryItems {
  width: 50%;
  height: 40px;
  margin-bottom: 8px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttonSize {
  border: none;
  background-color: transparent;
  white-space: pre-wrap;
}
.buttonSize:focus {
  outline: 0;
}
#arm[type="checkbox"]:checked ~ .arm {
  background-color: #2e77ef !important;
  color: white !important;
}
#simjang[type="checkbox"]:checked ~ .simjang {
  background-color: #2e77ef !important;
  color: white !important;
}
#pe[type="checkbox"]:checked ~ .pe {
  background-color: #2e77ef !important;
  color: white !important;
}
#neoi[type="checkbox"]:checked ~ .neoi {
  background-color: #2e77ef !important;
  color: white !important;
}
#gan[type="checkbox"]:checked ~ .gan {
  background-color: #2e77ef !important;
  color: white !important;
}
.illBtn {
  width: 100%;
  height: 40px;
  margin-top: 8px;
  border: 1px solid #cccccc;
  color: #2e77ef;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.illBtn2 {
  width: 100%;
  height: 40px;
  margin-top: 0px;
  margin-bottom: 8px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  text-align: center;
}
#arm2[type="checkbox"]:checked ~ .arm2 {
  background-color: #2e77ef !important;
  color: white !important;
}
#simjang2[type="checkbox"]:checked ~ .simjang2 {
  background-color: #2e77ef !important;
  color: white !important;
}
#pe2[type="checkbox"]:checked ~ .pe2 {
  background-color: #2e77ef !important;
  color: white !important;
}
#neoi2[type="checkbox"]:checked ~ .neoi2 {
  background-color: #2e77ef !important;
  color: white !important;
}
#gan2[type="checkbox"]:checked ~ .gan2 {
  background-color: #2e77ef !important;
  color: white !important;
}
#dang[type="checkbox"]:checked ~ .dang {
  background-color: #2e77ef !important;
  color: white !important;
}
#gohyeol[type="checkbox"]:checked ~ .gohyeol {
  background-color: #2e77ef !important;
  color: white !important;
}
#chi[type="checkbox"]:checked ~ .chi {
  background-color: #2e77ef !important;
  color: white !important;
}
.medicineBtn {
  width: 100%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#arm3[type="checkbox"]:checked ~ .arm3 {
  background-color: #2e77ef !important;
  color: white !important;
}
#simjang3[type="checkbox"]:checked ~ .simjang3 {
  background-color: #2e77ef !important;
  color: white !important;
}
#pe3[type="checkbox"]:checked ~ .pe3 {
  background-color: #2e77ef !important;
  color: white !important;
}
#neoi3[type="checkbox"]:checked ~ .neoi3 {
  background-color: #2e77ef !important;
  color: white !important;
}
#gan3[type="checkbox"]:checked ~ .gan3 {
  background-color: #2e77ef !important;
  color: white !important;
}
#dang2[type="checkbox"]:checked ~ .dang2 {
  background-color: #2e77ef !important;
  color: white !important;
}
#gohyeol2[type="checkbox"]:checked ~ .gohyeol2 {
  background-color: #2e77ef !important;
  color: white !important;
}
#chi2[type="checkbox"]:checked ~ .chi2 {
  background-color: #2e77ef !important;
  color: white !important;
}
.alergyInput {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  color: #333333;
  margin-bottom: 8px;
  text-align: center;
}
.sideEffbtn {
  width: 50%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sideEffbtn2 {
  width: 100%;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pwInput {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  color: #333333;
  margin-bottom: 8px;
  padding-left: 15px;
}
.UseCookiesBtn {
  width: 100%;
  height: 44px;
  background-color: #2e77ef;
  border: none;
  border-radius: 5px;
  color: white;
}
</style>
