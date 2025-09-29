<script setup>
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import BaseInput from "../global/BaseInput.vue";
import BaseSelect from "../global/BaseSelect.vue";
import { Check, Circle, Dot } from "lucide-vue-next"
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from "@/components/ui/stepper"
import { ref } from "vue";

const selectedCarType = ref('')
const selectedRideType = ref('')
const steps = [
    { step: 1 },
    { step: 2 },
    { step: 3 },
]
const carType = ref([
  { id: "alto", name: "Suzuki Alto" },
  { id: "corolla", name: "Toyota Corolla" },
  { id: "civic", name: "Honda Civic" },
  { id: "fortuner", name: "Toyota Fortuner" },
]);
const rideType = ref([
  { id: "oneway", name: "One-way" },
  { id: "roundtrip", name: "Round Trip" },
]);

</script>

<template>
    <div>
        <slot name="navItem"/>
        <div class="flex flex-col items-center gap-2 mt-4 justify-center text-[#272530] p-2">
            <h1 class="text-4xl font-bold">Book Your Ride Instantly !</h1>
            <Stepper class="flex w-1/2 items-start gap-2">
                <StepperItem v-for="step in steps" :key="step.step" v-slot="{ state }"
                    class="relative flex w-full flex-col items-center justify-center" :step="step.step">
                    <StepperSeparator v-if="step.step !== steps[steps.length - 1].step"
                        class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />

                    <StepperTrigger as-child>
                        <Button :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                            size="icon" class="z-10 rounded-full shrink-0"
                            :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']">
                            <Check v-if="state === 'completed'" class="size-5" />
                                <!-- <Circle v-if="state === 'active'" />  -->
                            <p v-if="state !== 'completed'">0{{ step.step }}</p>
                            <!-- <Dot v-if="state === 'inactive'" /> -->
                        </Button>
                    </StepperTrigger>

                    <div class="mt-5 flex flex-col items-center text-center">
                        <StepperTitle :class="[state === 'active' && 'text-primary']"
                            class="text-sm font-semibold transition lg:text-base">
                            {{ step.title }}
                        </StepperTitle>
                        <StepperDescription :class="[state === 'active' && 'text-primary']"
                            class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm">
                            {{ step.description }}
                        </StepperDescription>
                    </div>
                </StepperItem>
            </Stepper>
        </div>
        <!-- TODO: Move to a seperate Component -->
        <div class="px-10">
            <div class="p-2 grid grid-cols-2 gap-2">
                <div>
                    <Label for="car"> Car Type </Label>
                    <BaseSelect id="car" v-model:selected-option="selectedCarType" :options="carType" placeholder="Select Car Type" />
                </div>
                <div>
                    <Label for="ride"> Ride Type </Label>
                    <BaseSelect id="ride" v-model:selected-option="selectedRideType" :options="rideType" placeholder="Select Ride Type" />
                </div>
            </div>
            <div class="w-full p-2">
                <BaseInput id="pick-up-location" type="text" placeholder="Enter your Pick up Location" label="Pick up Location" />
            </div>
            <div class="w-full p-2">
                <BaseInput id="pick-up-location" type="text" placeholder="Enter your Drop of Location" label="Drop of Location" />
            </div>
        </div>
        <div class="flex justify-end my-4 gap-2 px-10">
            <Button class="rounded-full p-6 bg-[#FFDF6D] hover:bg-[#FFDF6D] text-black">
                CALL FOR BOOKING
            </Button>
            <Button class="rounded-full p-6 bg-[#272530] hover:bg-[#272530]">
                CONTINUE
            </Button>
        </div>
    </div>
</template>