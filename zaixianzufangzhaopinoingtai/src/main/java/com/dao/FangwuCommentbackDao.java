package com.dao;

import com.entity.FangwuCommentbackEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.view.FangwuCommentbackView;

/**
 * 房屋评价 Dao 接口
 *
 * @author 
 */
public interface FangwuCommentbackDao extends BaseMapper<FangwuCommentbackEntity> {

   List<FangwuCommentbackView> selectListView(Pagination page,@Param("params")Map<String,Object> params);

}
