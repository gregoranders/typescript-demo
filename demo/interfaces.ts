interface IEntity {

  id: number;

  data: any;
}

interface IEntityWithOptionalTimestamp extends IEntity {

  /**
   * Optional timestamp.
   *
   * Note '?' suffix on property name.
   */
  timestamp?: Date;

}

// function interface using generic constraint
interface IEntityComparator<T extends IEntity> {

  (objectA: T, objectB: T): number;

}

