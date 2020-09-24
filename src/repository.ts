/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   repository.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: break <jixueqing@flipboard.cn>             +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/08/05 14:16:30 by break             #+#    #+#             */
/*   Updated: 2020/08/05 14:16:44 by break            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export interface Repository<ENTITY, ID> {
  deleteById(id: ID): Promise<void>;

  findAll(): Promise<ENTITY[]>;

  findById(id: ID): Promise<ENTITY>;

  save(entity: ENTITY): Promise<ID>;

  saveAll(...entities: ENTITY[]): Promise<ID[]>;
}
