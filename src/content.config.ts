import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    slug: z.string(),
    category: z.string(),
    tagline: z.string(),
    description: z.string(),
    useCase: z.string(),
    image: image().optional(),
    general: z.object({
      ratedCapacity: z.string(),
      loadCenter: z.string(),
    }),
    dimensions: z.object({
      maxHeightWithBackrest: z.string(),
      stdMaxLiftingHeight: z.string(),
      overheadGuardHeight: z.string(),
      overallLengthWithFork: z.string(),
      wheelbase: z.string(),
      frontOverhang: z.string(),
      rearOverhang: z.string(),
      minGroundClearanceFrameMast: z.string(),
      overallWidthOutside: z.string(),
      adjustingRangeOfFork: z.string(),
      forkSizeStd: z.string(),
      frontTread: z.string(),
      rearWheelTread: z.string(),
      minTurningRadiusOutside: z.string(),
      minAisleWidthPallet1000x1200Crossways: z.string(),
      minAisleWidthPallet800x1200Lengthways: z.string(),
    }),
    tyres: z.object({
      wheelsNoFRXDriven: z.string(),
      tyreTypeFR: z.string(),
      tyreSizeFront: z.string(),
      tyreSizeRear: z.string(),
    }),
    performance: z.object({
      maxTravellingSpeedLoadedUnloaded: z.string(),
      liftingSpeedLoadedUnloaded: z.string(),
      loweringSpeedLoadedUnloaded: z.string(),
      maxGradabilityLoadedUnloaded: z.string(),
      serviceWeightWithOilWater: z.string(),
      axleLoadFRLoaded: z.string(),
      axleLoadFRUnloaded: z.string(),
      driveMotor: z.string(),
      liftMotor: z.string(),
      batteryVoltageCapacity: z.string(),
    }),
  }),
});

export const collections = { products };
