import { RecursiveMapFeature, MapFeature, RoadFeature } from "../../@types/Map/MapFeature";

import { LocationIds } from "../../Constants/Ids/LocationIds";

import { AmethystSands } from "./features/areas/AmethystSands";
import { BlackSands } from "./features/areas/BlackSands";
import { BlackenedWastes } from "./features/areas/BlackenedWastes";
import { Bloodlake } from "./features/areas/Bloodlake";
import { BurntForest } from "./features/areas/BurntForest";
import { CentaurPlains } from "./features/areas/CentaurPlains";
import { CryingIsland } from "./features/areas/CryingIsland";
import { CrystallineForest } from "./features/areas/CrystallineForest";
import { DreoxidicSea } from "./features/areas/DreoxidicSea";
import { EndlessSnows } from "./features/areas/EndlessSnows";
import { IsleOfCrandor } from "./features/areas/IsleOfCrandor";
import { JfarraPlains } from "./features/areas/JfarraPlains";
import { KaramjaJungle } from "./features/areas/KaramjaJungle";
import { KharidianEmpire } from "./features/areas/KharidianEmpire";
import { MisruulDesert } from "./features/areas/MisruulDesert";
import { Icaris } from "./features/areas/MisthalinContinent";
import { NightsilverWoods } from "./features/areas/NightsilverWoods";
import { SanguinestiPlains } from "./features/areas/SanguinestiPlains";
import { SapphireSands } from "./features/areas/SapphireSands";
import { TheBarrows } from "./features/areas/TheBarrows";
import { TheMists } from "./features/areas/TheMists";
import { TheTrident } from "./features/areas/TheTrident";
import { TheVeil } from "./features/areas/TheVeil";
import { ValleyOfKings } from "./features/areas/ValleyOfKings";
import { VanwaErea } from "./features/areas/VanwaErea";
import { VvardenbridgeSwamp } from "./features/areas/VvardenbridgeSwamp";

import { AlKharid } from "./features/cities/AlKharid";
import { Albatan } from "./features/cities/Albatan";
import { Alinor } from "./features/cities/Alinor";
import { Atmorra } from "./features/cities/Atmorra";
import { Basilaris } from "./features/cities/Basilaris";
import { BurghDeRott } from "./features/cities/BurghDeRott";
import { Canifis } from "./features/cities/Canifis";
import { Derinkuyyu } from "./features/cities/Derinkuyyu";
import { DraynorVillage } from "./features/cities/DraynorVillage";
import { Falador } from "./features/cities/Falador";
import { Hraclos } from "./features/cities/Hraclos";
import { Hupperdook } from "./features/cities/Hupperdook";
import { Illidara } from "./features/cities/Illidara";
import { Jfarra } from "./features/cities/Jfarra";
import { Keltar } from "./features/cities/Keltar";
import { Kylvoro } from "./features/cities/Kylvoro";
import { Laogai } from "./features/cities/Laogai";
import { Lbel } from "./features/cities/Lbel";
import { Levinthal } from "./features/cities/Levinthal";
import { Manifest } from "./features/cities/Manifest";
import { Menzoberranzan } from "./features/cities/Menzoberranzan";
import { Misruul } from "./features/cities/Misruul";
import { Naktamun } from "./features/cities/Naktamun";
import { Orcshire } from "./features/cities/Orcshire";
import { PortDremora } from "./features/cities/PortDremora";
import { PortSarim } from "./features/cities/PortSarim";
import { PortTootle } from "./features/cities/PortTootle";
import { PortVoid } from "./features/cities/PortVoid";
import { PortVolo } from "./features/cities/PortVolo";
import { PortVsara } from "./features/cities/PortVsara";
import { Rorekstead } from "./features/cities/Rorekstead";
import { Sanguinesti } from "./features/cities/Sanguinesti";
import { SeaSide } from "./features/cities/SeaSide";
import { SeersVillage } from "./features/cities/SeersVillage";
import { Uzer } from "./features/cities/Uzer";
import { Vkhelos } from "./features/cities/Vkhelos";
import { VoronWeoostOuterRing, VoronWeoost } from "./features/cities/VoronWeoost";
import { Vvardenbridge } from "./features/cities/Vvardenbridge";
import { Vvardenrock } from "./features/cities/Vvardenrock";
import { Waterdeep } from "./features/cities/Waterdeep";
import { Whiteurn } from "./features/cities/Whiteurn";
import { YawningCrossroads } from "./features/cities/YawningCrossroads";
import { Yfflint } from "./features/cities/Yfflint";

import { AlKharidGate } from "./features/gates/AlKharidGate";
import { NaktamunGate } from "./features/gates/NaktamunGate";
import { RevarisGate } from "./features/gates/RevarisGate";
import { HupperdookLake } from "./features/lakes/HupperdookLake";

import { LakeArgur } from "./features/lakes/LakeArgur";
import { LakeCalim } from "./features/lakes/LakeCalim";
import { LakeLaogai } from "./features/lakes/LakeLaogai";
import { LakeMelora } from "./features/lakes/LakeMelora";
import { LakeNaktamun } from "./features/lakes/LakeNaktamun";
import { LakeRevaris } from "./features/lakes/LakeRevaris";
import { LakeSarim } from "./features/lakes/LakeSarim";
import { LakeUzer } from "./features/lakes/LakeUzer";
import { LakeVvarden } from "./features/lakes/LakeVvarden";
import { TheWhiteLake } from "./features/lakes/TheWhiteLake";

import { AeolDriasMonastery } from "./features/monasteries/AeolDriasMonastery";
import { ErukteakMonastery } from "./features/monasteries/ErukteakMonastery";
import { GwanuandaveMonastery } from "./features/monasteries/GwanuandaveMonastery";

import { MonasteryOfSaintCuthbert } from "./features/monasteries/MonasteryOfSaintCuthbert";
import { TempleOfNevermore } from "./features/monasteries/TempleOfNevermore";
import { AnganiaMountains } from "./features/mountains/AnganiaMountains";
import { ArgurrosMountains } from "./features/mountains/ArgurrosMountains";
import { CentaursSpine } from "./features/mountains/CentaursSpine";
import { DragonspineMountains } from "./features/mountains/DragonspineMountains";
import { SiberquelRidge } from "./features/mountains/SiberquelRidge";
import { VirynsSpikes } from "./features/mountains/VirynsSpikes";
import { DevarquePrison } from "./features/other/DevarquePrison";
import { DreoxidicSeaIsland } from "./features/other/DreoxidicSeaIsland";

import { BishtouRiver } from "./features/rivers/BishtouRiver";
import { CalimRiver } from "./features/rivers/CalimRiver";
import { RiverFala } from "./features/rivers/RiverFala";
import { RiverVvarden } from "./features/rivers/RiverVvarden";
import { SelemenesBrook } from "./features/rivers/SelemenesBrook";
import { SlaversTears } from "./features/rivers/SlaversTears";
import { WhiteRiver } from "./features/rivers/WhiteRiver";

import { AlKharidGateRoad } from "./features/roads/AlKharidGateRoad";
import { AshPassage } from "./features/roads/AshPassage";
import { AtmorranTrail } from "./features/roads/AtmorranTrail";
import { BloodRun } from "./features/roads/BloodRun";
import { BloodfruitAvenue } from "./features/roads/BloodfruitAvenue";
import { Calimtie } from "./features/roads/Calimtie";
import { DraynorPath } from "./features/roads/DraynorPath";
import { Dryroad } from "./features/roads/Dryroad";
import { Dustway } from "./features/roads/Dustway";
import { Dwarfway } from "./features/roads/Dwarfway";
import { FishersRun } from "./features/roads/FishersRun";
import { Flintway } from "./features/roads/Flintway";
import { GhostWalk } from "./features/roads/Ghostwalk";
import { GondImrad } from "./features/roads/GondImrad";
import { HowlingHighway } from "./features/roads/HowlingHighway";
import { IllidansTrail } from "./features/roads/IllidansTrail";
import { Kingsway } from "./features/roads/Kingsway";
import { MelorasTurn } from "./features/roads/MelorasTurn";
import { MithrilMeldway } from "./features/roads/MithrilMeldway";
import { NaktamunGateway } from "./features/roads/NaktamunGateway";
import { NaktamunRoad } from "./features/roads/NaktamunRoad";
import { NightsilverRoad } from "./features/roads/NightsilverRoad";
import { Oakway } from "./features/roads/Oakway";
import { OrangeGrovePass } from "./features/roads/OrangeGrovePass";
import { OrangeGroveRoad } from "./features/roads/OrangeGroveRoad";
import { PakchuJungleTrail } from "./features/roads/PakchuJungleTrail";
import { PhasmaticByway } from "./features/roads/PhasmaticByway";
import { Queensroad } from "./features/roads/Queensroad";
import { RavensBeak } from "./features/roads/RavenBeak";
import { RavensRoad } from "./features/roads/RavensRoad";
import { RevarisByway } from "./features/roads/RevarisByway";
import { RevarisGateway } from "./features/roads/RevarisGateway";
import { SamarianRoad } from "./features/roads/SamarianRoad";
import { SeersPassage } from "./features/roads/SeersPassage";
import { SeersPilgrimage } from "./features/roads/SeersPilgrimage";
import { ShakorexisSpine } from "./features/roads/ShakorexisSpine";
import { Skeltaflaad } from "./features/roads/Skteltaflaad";
import { SlaversPath } from "./features/roads/SlaversPath";
import { SlaversWake } from "./features/roads/SlaversWake";
import { TheTapestry } from "./features/roads/TheTapestry";
import { TheVein } from "./features/roads/TheVein";
import { Veilway } from "./features/roads/Veilway";
import { VolosRoad } from "./features/roads/VolosRoad";
import { WardensWalk } from "./features/roads/WardensWalk";
import { WaterdeepRoad } from "./features/roads/WaterdeepRoad";
import { WayOfLies } from "./features/roads/WayOfLies";
import { WayOfTruth } from "./features/roads/WayOfTruth";
import { WhiteBrickRoad } from "./features/roads/WhiteBrickRoad";
import { WhiteBrickWaterway } from "./features/roads/WhiteBrickWaterway";
import { WroughtIronRoad } from "./features/roads/WroughtIronRoad";
import { YawningBridgeRoad } from "./features/roads/YawningBridgeRoad";
import { YawningRoad } from "./features/roads/YawningRoad";
import { TowerOfAbjuration } from "./features/towers/TowerOfAbjuration";
import { TowerOfConjuration } from "./features/towers/TowerOfConjuration";
import { TowerOfEnchantment } from "./features/towers/TowerOfEnchantment";
import { TowerOfEvocation } from "./features/towers/TowerOfEvocation";
import { TowerOfIllusion } from "./features/towers/TowerOfIllusion";
import { TowerOfNecromancy } from "./features/towers/TowerOfNecromancy";
import { TowerOfTransmutation } from "./features/towers/TowerOfTransmutation";

const f = (feature: MapFeature): RecursiveMapFeature => ({ feature });

export const recursiveMapFeatures: RecursiveMapFeature = {
  feature: VanwaErea,
  features: [
    {
      feature: DreoxidicSea,
      features: [
        {
          feature: DreoxidicSeaIsland,
        },
      ],
    },
    {
      feature: Icaris,
      features: [
        {
          feature: BlackenedWastes,
          features: [
            f(EndlessSnows),
            f(LakeLaogai),
            f(Laogai),
          ],
        },
        {
          feature: KharidianEmpire,
          features: [
            f(AlKharidGate),
            f(AlKharid),
            f(Albatan),
            f(RevarisGate),
            f(NaktamunGate),
            f(AmethystSands),
            f(SapphireSands),
            f(PortVolo),
            f(LakeRevaris),
            {
              feature: LakeUzer,
              features: [
                f(Uzer),
              ],
            },
            {
              feature: ValleyOfKings,
              features: [
                f(Naktamun),
                f(LakeNaktamun),
              ],
            },
          ],
        },
        {
          feature: HupperdookLake,
          features: [
            {
              feature: SiberquelRidge,
              features: [
                f(SlaversTears),
                {
                  feature: Hupperdook,
                  features: [
                    f(TowerOfEvocation),
                  ],
                },
              ],
            },
          ],
        },
        {
          feature: CentaurPlains,
          features: [
            {
              feature: SanguinestiPlains,
              features: [
                {
                  feature: Bloodlake,
                  features: [
                    f(Sanguinesti),
                  ],
                },
                f(Derinkuyyu),
                f(LakeMelora),
                f(Basilaris),
              ],
            },
            {
              feature: CentaursSpine,
              features: [
                f(RiverFala),
              ],
            },
          ],
        },
        {
          feature: JfarraPlains,
          features: [
            {
              feature: AnganiaMountains,
              features: [
                f(DevarquePrison),
                f(Jfarra),
                f(Kylvoro),
                f(ErukteakMonastery),
                f(BishtouRiver),
              ],
            },
          ],
        },
        {
          feature: MisruulDesert,
          features: [
            {
              feature: VoronWeoostOuterRing,
              features: [
                f(VoronWeoost),
                f(TowerOfTransmutation),
              ],
            },
            f(Misruul),
            f(BlackSands),
            f(DragonspineMountains),
            {
              feature: Keltar,
              features: [
                f(LakeCalim),
                f(CalimRiver),
              ],
            },
          ],
        },
        {
          feature: TheTrident,
          features: [
            f(LakeVvarden),
          ],
        },
        {
          feature: TheVeil,
          features: [
            f(BurghDeRott),
            f(TheBarrows),
            f(YawningCrossroads),
            {
              feature: Vvardenrock,
              features: [
                f(TowerOfEnchantment),
              ],
            },
          ],
        },
        {
          feature: TheWhiteLake,
          features: [
            f(Falador),
            f(WhiteRiver),
          ],
        },
        {
          feature: LakeSarim,
          features: [
            f(PortSarim),
          ],
        },
        {
          feature: Alinor,
          features: [
            f(TowerOfAbjuration),
          ],
        },
        {
          feature: Vvardenbridge,
          features: [
            f(VvardenbridgeSwamp),
            f(TowerOfIllusion),
          ],
        },
        f(Waterdeep),
        f(MonasteryOfSaintCuthbert),
        f(PortVoid),
        f(SeaSide),
        f(AeolDriasMonastery),
        f(Rorekstead),
        f(Levinthal),
        f(SeersVillage),
        // Same as seers village
        {
          feature: {
            ...SeersVillage,
            id: LocationIds.TowerOfDivination,
          },
        },
        {
          feature: KaramjaJungle,
          features: [
            f(TempleOfNevermore),
            f(BurntForest),
          ],
        },
        f(PortDremora),
        f(Canifis),
        f(PortTootle),
        f(PortVsara),
        f(DraynorVillage),
        f(Manifest),
        f(GwanuandaveMonastery),
        f(Atmorra),
        f(Yfflint),
        f(Illidara),
        f(Whiteurn),
        f(Orcshire),
        f(NightsilverWoods),
        f(VirynsSpikes),
        f(Lbel),
        f(RiverVvarden),
        f(SelemenesBrook),
        f(TowerOfConjuration),
        f(TowerOfNecromancy),
      ],
    },
    {
      feature: CryingIsland,
      features: [
        {
          feature: LakeArgur,
          features: [
            {
              feature: ArgurrosMountains,
              features: [
                f(Menzoberranzan),
              ],
            },
            f(Vkhelos),
            f(Hraclos),
            f(CrystallineForest),
          ],
        },
      ],
    },
    {
      // Barovia
      feature: TheMists,
    },
    {
      feature: IsleOfCrandor,
    },
  ],
};

export const roads: RoadFeature[] = [
  AlKharidGateRoad,
  AshPassage,
  AtmorranTrail,
  BloodfruitAvenue,
  BloodRun,
  Calimtie,
  // Calimyr,
  DraynorPath,
  Dryroad,
  Dustway,
  Dwarfway,
  FishersRun,
  Flintway,
  GhostWalk,
  GondImrad,
  HowlingHighway,
  IllidansTrail,
  Kingsway,
  MelorasTurn,
  MithrilMeldway,
  NaktamunGateway,
  NaktamunRoad,
  NightsilverRoad,
  Oakway,
  OrangeGrovePass,
  OrangeGroveRoad,
  PakchuJungleTrail,
  PhasmaticByway,
  Queensroad,
  RavensBeak,
  RavensRoad,
  RevarisByway,
  RevarisGateway,
  SamarianRoad,
  SeersPassage,
  SeersPilgrimage,
  ShakorexisSpine,
  Skeltaflaad,
  SlaversPath,
  SlaversWake,
  TheTapestry,
  TheVein,
  Veilway,
  VolosRoad,
  WardensWalk,
  WaterdeepRoad,
  WayOfLies,
  WayOfTruth,
  WhiteBrickRoad,
  WhiteBrickWaterway,
  WroughtIronRoad,
  YawningBridgeRoad,
  YawningRoad,
];
