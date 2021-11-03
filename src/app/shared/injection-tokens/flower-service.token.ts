import { InjectionToken } from "@angular/core";
import { FlowerService } from "../services/flower.service";

export const FLOWER_SERVICE_TOKEN = new InjectionToken<FlowerService>('flower_service');

